import { createSlice } from "@reduxjs/toolkit";
import { api } from "../api/apiSlice";
import { AuthState } from "../types";

const initialState: AuthState = {
  user: {
    username: "",
    email: "",
  },
  token: "",
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(api.endpoints.register.matchFulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.accessToken;
      })
      .addMatcher(api.endpoints.register.matchRejected, (state, { payload }) => {
        state.error = payload;
      })
      .addMatcher(api.endpoints.logIn.matchFulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.accessToken;
      })
      .addMatcher(api.endpoints.logIn.matchRejected, (state, { payload }) => {
        state.error = payload;
      })
      .addMatcher(api.endpoints.logOut.matchFulfilled, (state) => {
        state.user = initialState.user;
        state.token = "";
      })
      .addMatcher(api.endpoints.logOut.matchRejected, (state, { payload }) => {
        state.error = payload;
      })
      .addMatcher(api.endpoints.currentUser.matchFulfilled, (state, { payload }) => {
        state.user = payload.data;
      })
      .addMatcher(api.endpoints.currentUser.matchRejected, (state) => {
        state.token = "";
      });
  },
});

export default authSlice.reducer;
