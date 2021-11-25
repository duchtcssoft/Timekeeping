// components
import SignInForm from "./mains/SignInForm";
// forms
import ReactHookForm from "@/providers/ReactHookForm";
import { schemaSignin } from "@/react-hook-form/validations/Signin";
// others
import classes from "./Signin.module.scss";

/**
 * Signin
 */
export default function Signin() {
  return (
    <div className={classes.wrapper}>
      <ReactHookForm validateSchema={schemaSignin}>
        <SignInForm />
      </ReactHookForm>
    </div>
  );
}
