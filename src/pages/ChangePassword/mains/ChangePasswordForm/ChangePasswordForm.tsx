import { ROUTES } from "@/constants/routers";
import { InputField } from "@/custom-field/InputField/InputField";
import { useTypedForm } from "@/hooks/useTypedForm";
import { Button, Form, Input } from "antd";
import { Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import classes from "./ChangePasswordForm.module.scss";

export default function ChangePasswordForm(props: any) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useTypedForm("ChangePassword");

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className={classes.wrapper}>
      <form
        className={classes.forgotPasswordForm}
        onSubmit={handleSubmit(props.onSubmit)}
      >
        <h3
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          Tạo Mật Khẩu Mới
        </h3>
        <InputField label="Mật khẩu" isRequired>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input {...field} type="password" size="large" />
            )}
          />
          {errors.password && (
            <span className={classes.required}>{errors.password.message}</span>
          )}
        </InputField>
        <InputField label="Xác nhận mật khẩu" isRequired>
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field }) => (
              <Input {...field} type="password" size="large" />
            )}
          />
          {errors.confirmPassword && (
            <span className={classes.required}>
              {errors.confirmPassword.message}
            </span>
          )}
        </InputField>
        <Form.Item>
          <Button
            style={{ width: "100%", marginBottom: "20px" }}
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Xác Nhận
          </Button>
          <Link style={{ textDecoration: "underline" }} to={ROUTES.HOME}>
            Trang chủ
          </Link>
        </Form.Item>
      </form>
    </div>
  );
}
