// ─── AUTH ────────────────────────────────────────────────────────────────────

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  user: {
    id: string;
    username: string;
    email: string;
  };
  accessToken: string;
}

// ─────────────────────────────────────────────────────────────────────────────

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  id: string;
  user: {
    id: string;
    username: string;
    email: string;
  };
  accessToken: string;
}

// ─────────────────────────────────────────────────────────────────────────────

// POST /auth/logout
// Request body: — (requires Authorization header)
// Response: 204 No Content

// ─── USER ────────────────────────────────────────────────────────────────────

export interface CurrentUserResponse {
  id: string;
  username: string;
  email: string;
  userData: {
    notAllowedProducts: string[];
  };
  days: DayContract[];
}

// ─── DAILY RATE ──────────────────────────────────────────────────────────────

export interface DailyRateRequest {
  weight: number;
  height: number;
  age: number;
  desiredWeight: number;
  bloodType: 1 | 2 | 3 | 4;
}

export interface DailyRateResponse {
  dailyRate: number;
  notAllowedProducts: string[];
}

// ─────────────────────────────────────────────────────────────────────────────

export interface DailyRateByIdRequest {
  weight: number;
  height: number;
  age: number;
  desiredWeight: number;
  bloodType: 1 | 2 | 3 | 4;
}

export interface DailyRateByIdResponse {
  notAllowedProducts: string[];
  summaries: DaySummaryContract;
}

// ─── PRODUCTS ────────────────────────────────────────────────────────────────

export interface ProductContract {
  _id: string;
  title: {
    ru: string;
    ua?: string;
    en?: string;
  };
  calories: number;
  weight: number;
  groupBloodNotAllowed?: Record<string, boolean>;
}

// GET /product?search=<string>
// Response: ProductContract[]

// ─── DAY ─────────────────────────────────────────────────────────────────────

export interface AddDayProductRequest {
  date: string;
  productId: string;
  weight: string | number;
}

export interface AddDayProductResponse {
  day: {
    id: string;
    date: string;
    eatenProducts: EatenProductContract[];
    userId: string;
  };
  daySummary: DaySummaryContract;
}

// ─────────────────────────────────────────────────────────────────────────────

export interface DayInfoRequest {
  date: string;
}

export interface DayInfoResponse {
  date: string;
  eatenProducts: EatenProductContract[];
  daySummary: DaySummaryContract;
}

// ─────────────────────────────────────────────────────────────────────────────

export interface DeleteDayProductRequest {
  dayId: string;
  eatenProductId: string;
}

export interface DeleteDayProductResponse {
  newDaySummary: DaySummaryContract;
}

// ─── SHARED ──────────────────────────────────────────────────────────────────

export interface EatenProductContract {
  id: string;
  title: string;
  weight: number;
  kcal: number;
}

export interface DaySummaryContract {
  kcalLeft: number;
  kcalConsumed: number;
  dailyRate: number;
  percentsOfDailyRate: number;
}

export interface DayContract {
  _id: string;
  date: string;
  eatenProducts: EatenProductContract[];
  daySummary: DaySummaryContract;
  userId: string;
}
