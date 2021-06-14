import { Route, Redirect } from "react-router-dom";

function PublicRoute({ component: Component, ...restOfProps }) {
  const isAuthenticated = localStorage.getItem("accessToken");

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? <Redirect to="/accounts" /> : <Component {...props} />
      }
    />
  );
}
export default PublicRoute;
