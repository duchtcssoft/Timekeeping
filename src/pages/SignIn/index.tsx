// components
// forms
import { useRequestLogin } from "@/api/Login";
import Banner from "@/components/banner/Banner";
import { ROUTES } from "@/constants/routers";
import ReactHookForm from "@/providers/ReactHookForm";
import { schemaSignin } from "@/react-hook-form/validations/Signin";
import { message } from "antd";
import { useHistory } from "react-router";
import SignInForm from "./mains/SignInForm/SiginForm";
// others
import classes from "./Signin.module.scss";
/**
 * Signin
 */

export default function Signin() {
  const history = useHistory();

  const { execute, isLoading, response } = useRequestLogin();

  const onSubmit = (values: any) => {
    console.log("user values: ", values);
    execute({
      data: {
        email: values.email,
        password: values.password,
      },
      cbSuccess: (res: any) => {
        // This is on success callback
        localStorage.setItem("accessToken", res.data.access_token);
        history.replace(ROUTES.HOME);
      },
      cbError: (err) => {
        console.log(err);
        message.error("Email or Password is incorrect");
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
