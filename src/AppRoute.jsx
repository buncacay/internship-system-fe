import {Route, Routes} from "react-router-dom";
import {routes} from "./routes/index";
import ProtectedRoute from "./routes/protectedRoute";

const AppRoutes = () => {
    return (
        <Routes>
            {routes.map((route) => {
                const Component = route.component;
                const Layout = route.layout;

                const element = Layout ? (
                    <Layout>
                        <Component/>
                    </Layout>
                ) : (
                    <Component/>
                );

                if (route.isPublic) {
                    return (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={element}
                        />
                    );
                }

                return (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={
                            <ProtectedRoute>
                                {element}
                            </ProtectedRoute>
                        }
                    />
                );
            })}
        </Routes>
    );
};

export default AppRoutes;