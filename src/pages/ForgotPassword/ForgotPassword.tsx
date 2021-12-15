import { useRequestForgotPassword } from "@/api/Auth/ForgotPassword";
import ReactHookForm from "@/providers/ReactHookForm";
import { schemaForgotPassword } from "@/react-hook-form/validations/ForgotPassword";
import { message } from "antd";
import classes from "./ForgotPassword.module.scss";
import ForgotPasswordForm from "./mains/ForgotPasswordForm/ForgotPasswordForm";

export default function ForgotPassword() {
  const { execute, isLoading, response } = useRequestForgotPassword();

  const onSubmit = (values: any) => {
    console.log(values.email);
    execute({
      data: {
        email: values.email,
      },
      cbSuccess: (res: any) => {
        // This is on success callback
        console.log(res);
      },
      cbError: (err) => {
        console.log(err.request);
        message.error("Error");
      },
    });
  };

  return (
    <div className={classes.wrapper}>
      <ReactHookForm validateSchema={schemaForgotPassword}>
        <ForgotPasswordForm onSubmit={onSubmit} loading={isLoading} />
      </ReactHookForm>
    </div>
  );
}
