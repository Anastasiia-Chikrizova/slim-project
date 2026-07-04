import { lazy, Suspense } from "react";
import { Routes, Route, Outlet } from "react-router-dom";

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

interface LayoutProps {
  className: string;
}

const Layout = ({ className }: LayoutProps) => (
  <div className={className}>
    <Navbar />
    <Outlet />
  </div>
);

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<PublicRoute restricted redirectTo="/calculator" />}>
          <Route element={<Layout className={styles.App} />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<RegisterPage />} />
          </Route>
        </Route>

        <Route element={<PrivateRoute redirectTo="/login" />}>
          <Route element={<Layout className={styles.sideBarDiv} />}>
            <Route path="/diary" element={<DiaryPage />} />
            <Route path="/calculator" element={<CalculatorPage />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
