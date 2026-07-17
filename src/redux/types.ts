export interface User {
  id?: string;
  username: string;
  email: string;
  userData?: {
    notAllowedProducts: string[];
  };
  days?: Day[];
}

export interface Day {
  _id: string;
  date: string;
  eatenProducts: EatenProduct[];
  daySummary: DaySummary;
  userId: string;
}

export interface EatenProduct {
  id: string;
  title: string;
  weight: number;
  kcal: number;
}

export interface DaySummary {
  kcalLeft: number;
  kcalConsumed: number;
  dailyRate: number;
  percentsOfDailyRate: number;
}

export interface AuthState {
  user: User;
  token: string;
  error: unknown;
}

export interface CalendarState {
  id: string;
  date: string;
  notAllowedProducts: string[];
  days: Day[];
  todaySummary: DaySummary | null;
  userId: string;
  eatenProduct: EatenProduct[];
  dayId: string;
  dayChecked: string;
  del: string;
}

export interface RegisterCredentials {
  username: string;
  email: string;
  password: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface DailyRateOptions {
  weight: number;
  height: number;
  age: number;
  desiredWeight: number;
  bloodType: number;
}

export interface DailyRateResponse {
  dailyRate: number;
  notAllowedProducts: string[];
}
