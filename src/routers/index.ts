// routes
import { ROUTES } from "@/constants/routers";
// pages
import Home from "@/pages/Home";
import Signin from "@/pages/SignIn";
import { Employee } from "@/pages/Employee/pages/List";
import { EmployeeAbsence } from "@/pages/Employee/pages/Absence";

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
  {
    path: ROUTES.EMPLOYEE_ABSENCE,
    exact: true,
    component: EmployeeAbsence,
  },
];

export default appRoutes;
