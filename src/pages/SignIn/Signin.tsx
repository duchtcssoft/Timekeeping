// components
// forms
import BASE_URL from "@/api/BaseUrl/BaseUrl";
import Banner from "@/components/banner/Banner";
import { ROUTES } from "@/constants/routers";
import { message, Result } from "antd";
import axios from "axios";
import { access } from "fs";
import { useHistory } from "react-router";
import SignInForm from "./mains/SignInForm/SiginForm";
// others
import classes from "./Signin.module.scss";
/**
 * Signin
 */

export default function Signin() {
  const history = useHistory();
  // const handleSpin = () => {
  //   setLoading((PreValue) => !PreValue);
  // };
  const onFinish = (values: any) => {
    // console.log("Received values of form: ", values);
    axios({
      method: "post",
      url: `${BASE_URL}/auth/login`,
      data: {
        email: values.user.email,
        password: values.password,
        remember_token: values.remember,
      },
    })
      .then((res) => {
        console.log("res: ==", res.data.data.access_token);
        // if (res.data.success === true) history.push(ROUTES.HOME);
        localStorage.setItem("accessToken", res.data.data.access_token);
        history.replace(ROUTES.HOME);
      })
      .catch(() => {
        message.error("Email or Password is incorrect");
      });
  };

  return (
    <div className={classes.wrapper}>
      <Banner title="Sign in to explore more about app" />
      <SignInForm onFinish={onFinish} />
    </div>
  );
}
