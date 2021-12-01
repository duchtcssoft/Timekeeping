// routes
import { ROUTES } from "@/constants/routers";
// pages
import Home from "@/pages/Home";
import Signin from "@/pages/SignIn";
import Setting from "@/pages/Setting/index";
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
    path: ROUTES.SETTING,
    exact: true,
    component: Setting,
  },
];

export default appRoutes;
