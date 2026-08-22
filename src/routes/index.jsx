import { authenticationsRoutes } from "../pages/authentications/authenticationsRoutes";
import { dashboardsRoute } from "../pages/dashboards/dashboardsRoute.jsx";

export const routes = [...authenticationsRoutes, ...dashboardsRoute];
