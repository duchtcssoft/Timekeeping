// components
// forms
import { useRequestSignup } from "@/api/Signup";
import Banner from "@/components/banner/Banner";
import { ROUTES } from "@/constants/routers";
import ReactHookForm from "@/providers/ReactHookForm";
import { schemaSignup } from "@/react-hook-form/validations/Signup";
import { message } from "antd";
import { useHistory } from "react-router";
import SignupForm from "./mains/SignupForm/SignupForm";
// others
import classes from "./Signup.module.scss";

/**
 * Signin
 */
export default function Signup() {
  const history = useHistory();
  const { execute, isLoading, response } = useRequestSignup();

  const onSubmit = (values: any) => {
    execute({
      data: {
        name: values.name,
        email: values.email,
        phone: values.phone,
        address: values.adress,
        password: values.password,
        position: "1",
      },
      cbSuccess: (res: any) => {
        // This is on success callback
        message.success("Create account complete");
        history.replace(ROUTES.SIGN_IN);
      },
      cbError: (err) => {
        if (err.response) {
          // console.log("response: ", err.response.data.errors.email[0]);
          // FIXME:What is this, API return error from email[0], right? What about other error like (Network error)
          message.error(err.response.data.errors.email[0]);

          // client received an error response (5xx, 4xx)
        } else if (err.request) {
          // console.log("request: ", err);
          // client never received a response, or request never left
        } else {
          // anything else
          // console.log("anything else: ", err);
        }
      },
    });
  };
  return (
    <div className={classes.wrapper}>
      <Banner title="Tạo tài khoản dễ dàng, thiết lập công ty của bạn" />
      <ReactHookForm validateSchema={schemaSignup}>
        <SignupForm onSubmit={onSubmit} loading={isLoading} />
        {/* {console.log(emailTaken)} */}
      </ReactHookForm>
    </div>
  );
}
