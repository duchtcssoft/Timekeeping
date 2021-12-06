// routes
import { ROUTES } from "@/constants/routers";
// pages
import ChangePassword from "@/pages/ChangePassword/ChangePassword";
import ForgotPassword from "@/pages/ForgotPassword/ForgotPassword";
// pages
import Signin from "@/pages/SignIn";
import Signup from "@/pages/Signup/Signup";
import TimeKeeping from "@/pages/TimeKeeping/TimeKeeping";

/**
 * define main pages routes
 */
const appRoutes = [
  // {
  //   path: ROUTES.HOME,
  //   exact: true,
  //   component: Home,
  // },
  {
    path: ROUTES.SIGN_IN,
    exact: true,
    component: Signin,
  },
  {
    path: ROUTES.SIGN_UP,
    exact: true,
    component: Signup,
  },
  {
    path: ROUTES.FORGOT_PASSWORD,
    exact: true,
    component: ForgotPassword,
  },
  {
    path: ROUTES.CHANGE_PASSWORD,
    exact: true,
    component: ChangePassword,
  },
  {
    path: ROUTES.TIME_KEEPING,
    exact: true,
    component: TimeKeeping,
  },
];

export default appRoutes;
