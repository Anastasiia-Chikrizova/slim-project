import AppRoutes from "./navigation/Routes";
import { useSelector } from "react-redux";

import { useCurrentUserQuery } from "./redux/api/apiSlice";
import "./shared/styles/common.scss";
import { fetchToken } from "./redux/auth/auth-selectors";

function App() {
  const isLoggin = useSelector(fetchToken);

  useCurrentUserQuery(undefined, { skip: !isLoggin });

  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
