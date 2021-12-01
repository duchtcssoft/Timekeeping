import { ROUTES } from "@/constants/routers";
import { InputField } from "@/custom-field/InputField/InputField";
import { useTypedForm } from "@/hooks/useTypedForm";
import { UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import classes from "./ForgotPasswordForm.module.scss";

export default function ForgotPasswordForm(props: any) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useTypedForm("ForgotPassword");

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
          Quên Mật Khẩu
        </h3>
        <p>
          Nhập email đăng ký. Chúng tôi sẽ gửi 1 đường dẫn đến email của bạn để
          đổi mật khẩu mới.
        </p>
        <InputField label="Email" isRequired>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                className={classes.form_item}
                size="large"
                placeholder="Nhập email của bạn"
                type="email"
              />
            )}
          />
          {errors.email && (
            <span className={classes.required}>{errors.email.message}</span>
          )}
        </InputField>

        <Form.Item style={{ display: "block" }}>
          <Button
            style={{ width: "100%", margin: "20px 0" }}
            type="primary"
            htmlType="submit"
            className="login-form-button"
            loading={props.loading}
          >
            Gửi
          </Button>
          <Link style={{ textDecoration: "underline" }} to={ROUTES.SIGN_IN}>
            Quay lại
          </Link>
        </Form.Item>
      </form>
    </div>
  );
}
