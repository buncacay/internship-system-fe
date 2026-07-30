import { Route, Routes } from "react-router-dom";
import { routes } from "../src/routes/index";
import ProtectedRoute from "./routes/protectedRoute";
import SignIn from "./pages/authentications/component/sign-in/sign-in.components";

const AppRoutes = () => {
  return (
    <Routes>
      {routes.map((route) => {
        const Component = route.component;

        if (route.isPublic) {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={<SignIn />}
            />
          );
        }

        return (
          <Route
            key={route.path}
            path={route.path}
            element={
              <ProtectedRoute>
                <Component />
              </ProtectedRoute>
            }
          />
        );
      })}
    </Routes>
  );
};

export default AppRoutes;