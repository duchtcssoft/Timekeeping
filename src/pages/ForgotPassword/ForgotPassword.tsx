import BASE_URL from "@/api/BaseUrl/BaseUrl";
import ReactHookForm from "@/providers/ReactHookForm";
import { schemaForgotPassword } from "@/react-hook-form/validations/ForgotPassword";
import { schemaSignup } from "@/react-hook-form/validations/Signup";
import { message } from "antd";
import axios from "axios";
import classes from "./ForgotPassword.module.scss";
import ForgotPasswordForm from "./mains/ForgotPasswordForm/ForgotPasswordForm";
import { useState } from "react";

export default function ForgotPassword() {
  const [loading, setLoading] = useState(false);
  const onSubmit = (values: any) => {
    console.log("Forgotpassword: ", values);
    setLoading(true);
    axios({
      method: "post",
      url: `${BASE_URL}/auth/forgot-password`,
      data: {
        email: values.email,
      },
    })
      .then((res) => {
        console.log("res: ==", res);
        message.success("Đã gửi thành công đến email của bạn!");
      })
      .catch((err) => {
        console.log("error: ", err);
        message.error("Đã có lỗi xảy ra!");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className={classes.wrapper}>
      <ReactHookForm validateSchema={schemaForgotPassword}>
        <ForgotPasswordForm onSubmit={onSubmit} loading={loading} />
      </ReactHookForm>
    </div>
  );
}
