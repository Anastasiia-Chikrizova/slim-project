import { RootState } from "../store";

export const fetchToken = (state: RootState): string => state.auth.token;

export const fetchName = (state: RootState): string => state.auth.user.username;
