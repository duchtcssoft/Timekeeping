// components
// forms
import BASE_URL from "@/api/BaseUrl/BaseUrl";
import Banner from "@/components/banner/Banner";
import { ROUTES } from "@/constants/routers";
import { message } from "antd";
import axios from "axios";
import { useHistory } from "react-router";
import SignupForm from "./mains/SignupForm/SignupForm";
// others
import classes from "./Signup.module.scss";

/**
 * Signin
 */
export default function Signup() {
  const history = useHistory();
  const onFinish = (values: any) => {
    console.log(values);

    axios({
      method: "post",
      url: `${BASE_URL}/auth/register`,
      data: {
        name: values.user.name,
        email: values.user.email,
        phone: values.user.phone,
        address: values.user.address,
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
      });
  };
  return (
    <div className={classes.wrapper}>
      <Banner title="A few clicks away from creating your account" />
      <SignupForm onFinish={onFinish} />
    </div>
  );
}
