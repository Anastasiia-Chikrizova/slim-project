import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import styles from "./Routes.module.scss";
import PrivateRoute from "../shared/components/PrivateRoute";
import PublicRoute from "../shared/components/PublicRoute";

const CalculatorPage = lazy(() =>
  import("../pages/CalculatorPage/CalculatorPage")
);
const DiaryPage = lazy(() => import("../pages/DiaryPage/Diarypage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const MainPage = lazy(() => import("../pages/MainPage/MainPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));
const Navbar = lazy(() => import("../client/Navbar/Navbar"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<PublicRoute restricted redirectTo="/calculator" />}>
          <Route
            path="/"
            element={
              <div className={styles.App}>
                <Navbar />
                <MainPage />
              </div>
            }
          />
          <Route
            path="/login"
            element={
              <div className={styles.App}>
                <Navbar />
                <LoginPage />
              </div>
            }
          />
          <Route
            path="/registration"
            element={
              <div className={styles.App}>
                <Navbar />
                <RegisterPage />
              </div>
            }
          />
        </Route>

        <Route element={<PrivateRoute redirectTo="/login" />}>
          <Route
            path="/diary"
            element={
              <div className={styles.sideBarDiv}>
                <Navbar />
                <DiaryPage />
              </div>
            }
          />
          <Route
            path="/calculator"
            element={
              <div className={styles.sideBarDiv}>
                <Navbar />
                <CalculatorPage />
              </div>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
