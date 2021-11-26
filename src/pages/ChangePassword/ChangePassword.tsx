import classes from "./ChangePassword.module.scss";
import ChangePasswordForm from "./mains/ChangePasswordForm/ChangePasswordForm";

export default function ChangePassword() {
  return (
    <div className={classes.wrapper}>
      <ChangePasswordForm />
    </div>
  );
}
