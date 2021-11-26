import BASE_URL from "@/api/BaseUrl/BaseUrl";
import axios from "axios";
import classes from "./ForgotPassword.module.scss";
import ForgotPasswordForm from "./mains/ForgotPasswordForm/ForgotPasswordForm";

export default function ForgotPassword() {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
    axios({
      method: "post",
      url: `${BASE_URL}/auth/forgot-password`,
      data: {
        email: values.user.email,
      },
    }).then((res) => {
      console.log("res: ==", res);
    });
  };
  return (
    <div className={classes.wrapper}>
      <ForgotPasswordForm onFinish={onFinish} />
    </div>
  );
}
