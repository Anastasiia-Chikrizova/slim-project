import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { format } from "date-fns";
import { RootState } from "../store";

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
    register: builder.mutation({
      query: (credentials) => ({
        url: "auth/register",
        method: "POST",
        body: credentials,
      }),
    }),
    logIn: builder.mutation({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    logOut: builder.mutation({
      query: () => ({
        url: "auth/logout",
        method: "POST",
      }),
    }),
    currentUser: builder.query({
      query: () => "user",
      transformResponse: (data) => ({
        data,
        date: format(new Date(), "yyyy-MM-dd"),
      }),
    }),
    dailyRate: builder.mutation({
      query: (options) => ({
        url: "daily-rate",
        method: "POST",
        body: options,
      }),
    }),
    dailyRateById: builder.mutation({
      query: ({ idUser, ccc }) => ({
        url: `daily-rate/${idUser}`,
        method: "POST",
        body: ccc,
      }),
    }),
    products: builder.query({
      query: (search) => `product?search=${search}`,
    }),
    addDayProduct: builder.mutation({
      query: (options) => ({
        url: "day",
        method: "POST",
        body: options,
      }),
    }),
    dayInfo: builder.mutation({
      query: (options) => ({
        url: "day/info",
        method: "POST",
        body: options,
      }),
    }),
    deleteDayProduct: builder.mutation({
      query: (options) => ({
        url: "day",
        method: "DELETE",
        body: options,
      }),
      transformResponse: (data, _meta, options) => ({ data, options }),
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
