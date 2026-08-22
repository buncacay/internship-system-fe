import {PATHS} from "../../constants/path.jsx";
import Home from "./index.jsx";
import MainLayout from "../../shares/layouts/main-layout.jsx";

export const dashboardsRoute = [
    {
        path: PATHS.HOME +  "dashboard",
        component: Home,
        isPublic:false,
        layout: MainLayout
    }
]