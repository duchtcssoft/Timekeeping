// components
// forms
import BASE_URL from "@/api/BaseUrl/BaseUrl";
import Banner from "@/components/banner/Banner";
import { ROUTES } from "@/constants/routers";
import ReactHookForm from "@/providers/ReactHookForm";
import { schemaSignup } from "@/react-hook-form/validations/Signup";
import { message } from "antd";
import axios from "axios";
import { useHistory } from "react-router";
import SignupForm from "./mains/SignupForm/SignupForm";
import { useState } from "react";
// others
import classes from "./Signup.module.scss";

/**
 * Signin
 */
export default function Signup() {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const onSubmit = (values: any) => {
    console.log(values);
    setLoading(true);
    axios({
      method: "post",
      url: `${BASE_URL}/auth/register`,
      data: {
        name: values.name,
        email: values.email,
        phone: values.phone,
        address: values.address,
        password: values.password,
        position: "1",
      },
    })
      .then((res) => {
        console.log("res: ==", res);
        message.success("Create account complete");
        history.replace(ROUTES.SIGN_IN);
      })
      .catch((err) => {
        // message.error("Failed")

        if (err.response) {
          // console.log("response: ", err.response.data.errors.email["0"]);
          message.error(err.response.data.errors.email["0"]);

          // client received an error response (5xx, 4xx)
        } else if (err.request) {
          // console.log("request: ", err);
          // client never received a response, or request never left
        } else {
          // anything else
          // console.log("anything else: ", err);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className={classes.wrapper}>
      <Banner title="Tạo tài khoản dễ dàng, thiết lập công ty của bạn" />
      <ReactHookForm validateSchema={schemaSignup}>
        <SignupForm onSubmit={onSubmit} loading={loading} />
      </ReactHookForm>
    </div>
  );
}
