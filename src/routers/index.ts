// routes
import { ROUTES } from "@/constants/routers";
// pages
import Home from "@/pages/Home";
import Offices from "@/pages/Offices";
import Signin from "@/pages/SignIn";

/**
 * define main pages routes
 */
const appRoutes = [
  {
    path: ROUTES.HOME,
    exact: true,
    component: Home,
  },
  {
    path: ROUTES.SIGN_IN,
    exact: true,
    component: Signin,
  },
  {
    path: ROUTES.OFFICE,
    exact: true,
    component: Offices,
  },
];

export default appRoutes;
