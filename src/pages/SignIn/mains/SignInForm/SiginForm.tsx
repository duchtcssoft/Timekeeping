import { Form, Input, Button, Checkbox, Avatar } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import classes from "./SignInForm.module.scss";
import { Link } from "react-router-dom";
import { ROUTES } from "@/constants/routers";
import { Controller } from "react-hook-form";
import { useTypedForm } from "@/hooks/useTypedForm";
import { InputField } from "@/custom-field/InputField/InputField";

function SignInForm(props: any) {
  const onChange = (e: any) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useTypedForm("SignIn");

  return (
    <div className={classes.wrapper}>
      <form onSubmit={handleSubmit(props.onSubmit)}>
        <div className={classes.avatar}>
          <Avatar size="large" icon={<UserOutlined />} />
        </div>
        <h3
          style={{
            textAlign: "center",
            margin: "10px 0 40px",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          Đăng Nhập
        </h3>
        <InputField label="">
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                size="large"
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Nhập email của bạn"
                type="email"
              />
            )}
          />
          {errors.email && (
            <span className={classes.required}>{errors.email.message}</span>
          )}
        </InputField>

        <InputField label="">
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                size="large"
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Nhập mật khẩu"
                type="password"
              />
            )}
          />
          {errors.password && (
            <span className={classes.required}>{errors.password.message}</span>
          )}
        </InputField>

        <InputField label="">
          <Controller
            name="remember"
            control={control}
            render={({ field }) => <Checkbox>Ghi nhớ đăng nhập</Checkbox>}
          />
        </InputField>
        <Link to={ROUTES.FORGOT_PASSWORD} className="login-form-forgot" href="">
          Quên mật khẩu
        </Link>
        <Form.Item style={{ display: "block" }}>
          <Button
            loading={props.loading}
            // onClick={props.onClick}
            style={{ width: "100%", marginBottom: "20px" }}
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Đăng Nhập
          </Button>
          Chưa có tài khoản?&nbsp;
          <Link style={{ textDecoration: "underline" }} to={ROUTES.SIGN_UP}>
            đăng ký ngay.
          </Link>
        </Form.Item>
      </form>
    </div>
  );
}
export default SignInForm;
