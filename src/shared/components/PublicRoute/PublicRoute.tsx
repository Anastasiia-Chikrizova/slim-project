import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

interface PublicRouteProps {
  restricted?: boolean;
  redirectTo?: string;
}

const PublicRoute = ({ restricted = false, redirectTo = "/" }: PublicRouteProps) => {
  const isLoggedIn = useAuth();
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} replace /> : <Outlet />;
};

export default PublicRoute;
