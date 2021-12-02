// routes
import { ROUTES } from "@/constants/routers";
import { Employee } from "@/pages/Employee/pages/List";
// pages
import Home from "@/pages/Home";
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
    path: ROUTES.EMPLOYEE,
    exact: true,
    component: Employee,
  },
];

export default appRoutes;
