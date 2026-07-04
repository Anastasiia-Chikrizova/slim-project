import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/apiSlice";
import { CalendarState } from "../../types";

const initialState: CalendarState = {
  id: "",
  date: "",
  notAllowedProducts: [],
  days: [],
  todaySummary: null,
  userId: "",
  eatenProduct: [],
  dayId: "",
  dayChecked: "",
  del: "",
};

const summariesSlice = createSlice({
  name: "summaries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(api.endpoints.logIn.matchFulfilled, (state, { payload }) => {
        state.id = payload.id;
      })
      .addMatcher(api.endpoints.currentUser.matchFulfilled, (state, { payload }) => {
        state.id = payload.data.id;
        state.notAllowedProducts = payload.data.userData.notAllowedProducts;
        state.days = payload.data.days;
        state.date = payload.date;

        const currentDay = payload.data.days?.find(
          (el: { date: string }) => el.date === state.date
        );

        state.eatenProduct = currentDay?.eatenProducts ?? [];
        state.todaySummary = currentDay?.daySummary ?? null;
        state.dayId = currentDay?._id ?? "";
      })
      .addMatcher(api.endpoints.dailyRateById.matchFulfilled, (state, { payload }) => {
        state.notAllowedProducts = payload.notAllowedProducts;
        state.todaySummary = payload.summaries;
      })
      .addMatcher(api.endpoints.dayInfo.matchFulfilled, (state, { payload }) => {
        state.eatenProduct = payload.eatenProducts;
        state.date = payload.date;
        state.todaySummary = payload.daySummary;
      })
      .addMatcher(api.endpoints.addDayProduct.matchFulfilled, (state, { payload }) => {
        state.dayId = payload.day?.id;
        state.date = payload.day?.date;
        state.eatenProduct = payload.day?.eatenProducts;
        state.todaySummary = payload?.daySummary;
        state.userId = payload.day?.userId;
      })
      .addMatcher(api.endpoints.deleteDayProduct.matchFulfilled, (state, { payload }) => {
        state.todaySummary = payload.data.newDaySummary;
        state.eatenProduct = state.eatenProduct.filter(
          (el) => el.id !== payload.options.eatenProductId
        );
      });
  },
});

export default summariesSlice.reducer;
