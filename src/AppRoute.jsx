import { Route, Routes } from "react-router-dom";
import { routes } from "../src/routes/index";
import ProtectedRoute from "./routes/protectedRoute";

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
              element={<Component />}
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