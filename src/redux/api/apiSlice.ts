import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { format } from "date-fns";
import { RootState } from "../store";
import {
  RegisterRequest,
  RegisterResponse,
  LoginRequest,
  LoginResponse,
  CurrentUserResponse,
  DailyRateRequest,
  DailyRateResponse,
  DailyRateByIdRequest,
  DailyRateByIdResponse,
  ProductContract,
  AddDayProductRequest,
  AddDayProductResponse,
  DayInfoRequest,
  DayInfoResponse,
  DeleteDayProductRequest,
  DeleteDayProductResponse,
} from "./contracts";

interface CurrentUserResult {
  data: CurrentUserResponse;
  date: string;
}

interface DeleteDayProductResult {
  data: DeleteDayProductResponse;
  options: DeleteDayProductRequest;
}

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://slimmom-backend.herokuapp.com/",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    register: builder.mutation<RegisterResponse, RegisterRequest>({
      query: (credentials) => ({
        url: "auth/register",
        method: "POST",
        body: credentials,
      }),
    }),
    logIn: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    logOut: builder.mutation<void, void>({
      query: () => ({
        url: "auth/logout",
        method: "POST",
      }),
    }),
    currentUser: builder.query<CurrentUserResult, void>({
      query: () => "user",
      transformResponse: (data: CurrentUserResponse): CurrentUserResult => ({
        data,
        date: format(new Date(), "yyyy-MM-dd"),
      }),
    }),
    dailyRate: builder.mutation<DailyRateResponse, DailyRateRequest>({
      query: (options) => ({
        url: "daily-rate",
        method: "POST",
        body: options,
      }),
    }),
    dailyRateById: builder.mutation<
      DailyRateByIdResponse,
      { idUser: string; ccc: DailyRateByIdRequest }
    >({
      query: ({ idUser, ccc }) => ({
        url: `daily-rate/${idUser}`,
        method: "POST",
        body: ccc,
      }),
    }),
    products: builder.query<ProductContract[], string>({
      query: (search) => `product?search=${search}`,
    }),
    addDayProduct: builder.mutation<AddDayProductResponse, AddDayProductRequest>({
      query: (options) => ({
        url: "day",
        method: "POST",
        body: options,
      }),
    }),
    dayInfo: builder.mutation<DayInfoResponse, DayInfoRequest>({
      query: (options) => ({
        url: "day/info",
        method: "POST",
        body: options,
      }),
    }),
    deleteDayProduct: builder.mutation<DeleteDayProductResult, DeleteDayProductRequest>({
      query: (options) => ({
        url: "day",
        method: "DELETE",
        body: options,
      }),
      transformResponse: (data: DeleteDayProductResponse, _meta, options): DeleteDayProductResult => ({
        data,
        options,
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLogInMutation,
  useLogOutMutation,
  useCurrentUserQuery,
  useLazyCurrentUserQuery,
  useDailyRateMutation,
  useDailyRateByIdMutation,
  useProductsQuery,
  useLazyProductsQuery,
  useAddDayProductMutation,
  useDayInfoMutation,
  useDeleteDayProductMutation,
} = api;
