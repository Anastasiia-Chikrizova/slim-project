import { useActionState } from "react";
import { Notify } from "notiflix/build/notiflix-notify-aio";

interface AuthFormState {
  error: string | null;
}

interface ApiError {
  status?: number;
  data?: { message?: string };
}

export const useAuthFormAction = <TPayload>(
  submit: (payload: TPayload) => Promise<unknown>,
  buildPayload: (formData: FormData) => TPayload,
  errorMessageByStatus: Record<number, string> = {}
) => {
  const action = async (_prevState: AuthFormState, formData: FormData): Promise<AuthFormState> => {
    const payload = buildPayload(formData);
    try {
      await submit(payload);
      return { error: null };
    } catch (error) {
      const err = error as ApiError;
      const message =
        (err.status && errorMessageByStatus[err.status]) || err.data?.message || "Something went wrong";
      Notify.failure(message);
      return { error: message };
    }
  };

  return useActionState(action, { error: null });
};
