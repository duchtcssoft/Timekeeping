// routes
import { ROUTES } from "@/constants/routers";
// pages
import ChangePassword from "@/pages/ChangePassword/ChangePassword";
import ForgotPassword from "@/pages/ForgotPassword/ForgotPassword";
import Home from "@/pages/Home";
// pages
import Signin from "@/pages/SignIn";
import Signup from "@/pages/Signup/Signup";
import CheckIn from "@/pages/TimeKeeping/CheckIn/CheckIn";
import Checkout from "@/pages/TimeKeeping/CheckOut/Checkout";
import TimeKeeping from "@/pages/TimeKeeping/TimeKeeping";

/**
 * define main pages routes
 */
const appRoutes = [
  {
    path: ROUTES.HOME,
    exact: true,
    component: Home,

    // render={() =>
    //   cookies.accessToken ? (
    //     <Home />
    //   ) : (
    //     <Redirect to={ROUTES.SIGN_IN} />
    //   )}
  },
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
  {
    path: `${ROUTES.TIME_KEEPING}${ROUTES.CHECK_IN}`,
    exact: true,
    component: CheckIn,
  },
  {
    path: `${ROUTES.TIME_KEEPING}${ROUTES.CHECK_OUT}`,
    exact: true,
    component: Checkout,
  },
];

export default appRoutes;
