import ReactHookForm from "@/providers/ReactHookForm";
import { schemaChangePassword } from "@/react-hook-form/validations/ChangePassword";
import classes from "./ChangePassword.module.scss";
import ChangePasswordForm from "./mains/ChangePasswordForm/ChangePasswordForm";

export default function ChangePassword() {
  const onSubmit = (values: any) => {
    console.log("change password values: ", values);
  };
  return (
    <div className={classes.wrapper}>
      <ReactHookForm validateSchema={schemaChangePassword}>
        <ChangePasswordForm onSubmit={onSubmit} />
      </ReactHookForm>
    </div>
  );
}
