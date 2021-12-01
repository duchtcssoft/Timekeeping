// components
// forms
import BASE_URL from "@/api/BaseUrl/BaseUrl";
import Banner from "@/components/banner/Banner";
import { ROUTES } from "@/constants/routers";
import ReactHookForm from "@/providers/ReactHookForm";
import { schemaSignin } from "@/react-hook-form/validations/Signin";
import { message } from "antd";
import axios from "axios";
import { useState } from "react";
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
  const [loading, setLoading] = useState(false);

  const onSubmit = (values: any) => {
    console.log("values:", values);
    setLoading(true);
    axios({
      method: "post",
      url: `${BASE_URL}/auth/login`,
      data: {
        email: values.username,
        password: values.password,
        remember_token: values.remember,
      },
    })
      .then((res) => {
        console.log("res: ==", res.data.data.access_token);
        localStorage.setItem("accessToken", res.data.data.access_token);
        history.replace(ROUTES.HOME);
      })
      .catch(() => {
        message.error("Email or Password is incorrect");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className={classes.wrapper}>
      <Banner title="Sign in to explore more about app" />
      <ReactHookForm validateSchema={schemaSignin}>
        <SignInForm loading={loading} onSubmit={onSubmit} />
      </ReactHookForm>
    </div>
  );
}
