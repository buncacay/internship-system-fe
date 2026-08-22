import {PATHS} from "../../constants/path";
import SignIn from "./components/sign-in/sign-in.components.jsx";


export const authenticationsRoutes = [
  {
    path: PATHS.HOME,
    component: SignIn,
    isPublic: true,
  },
  {
    path: PATHS.HOME + "login",
    component: SignIn,
    isPublic: true,
  },
  
];
