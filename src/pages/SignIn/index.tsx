// components
// forms
import Banner from "@/components/banner/Banner";
import { ROUTES } from "@/constants/routers";
import ReactHookForm from "@/providers/ReactHookForm";
import { schemaSignin } from "@/react-hook-form/validations/Signin";
import { message } from "antd";
import { useHistory } from "react-router";
import SignInForm from "./mains/SignInForm/SiginForm";
// others
import classes from "./Signin.module.scss";
import setCookie from "@/utils/cookies/setCookies";
import { useRequestLogin } from "@/api/Auth/Login";
/**
 * Signin
 */

export default function Signin() {
  const history = useHistory();

  const { execute: LoginRequest, isLoading, response: loginResponse } = useRequestLogin();
  // console.log("loginResponse", loginResponse);
  const token = loginResponse?.data?.access_token;
  setCookie("access_token", token, 1);

  const onSubmit = (values: any) => {
    console.log("user values: ", values);

    LoginRequest({
      data: {
        email: values.email,
        password: values.password,
      },
      cbSuccess: (res: any) => {
        console.log(res);
        history.replace(ROUTES.HOME);
      },
      cbError: (err) => {
        if (err.response) {
          // console.log("response: ", err.response);
          // message.error(err.response.data.error.message);
        }
        if (err.request) {
          console.log(err.request);
        }
        // FIXME: We have thousand of other error, And this code like will log 1 error for all that error
        // This is a very "obvious bug", How many bug like this are there in This source?
      },
    });
  };

  return (
    <div className={classes.wrapper}>
      <Banner title="Sign in to explore more about app" />
      <ReactHookForm validateSchema={schemaSignin}>
        <SignInForm loading={isLoading} onSubmit={onSubmit} />
      </ReactHookForm>
    </div>
  );
}
