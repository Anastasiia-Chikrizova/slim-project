import { RootState } from "../../store";
import { DaySummary, EatenProduct } from "../../types";

export const getSummariesInfo = (state: RootState): DaySummary | null => state.calendar.todaySummary;
export const getUserId = (state: RootState): string | undefined => state.auth.user.id;
export const getnotAllowedProducts = (state: RootState): string[] => state.calendar.notAllowedProducts;
export const getData = (state: RootState): string => state.calendar.date;
export const getProduct = (state: RootState): EatenProduct[] => state.calendar.eatenProduct;
export const getDayId = (state: RootState): string => state.calendar.dayId;
