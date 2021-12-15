import { ROUTES } from "@/constants/routers";
import { InputField } from "@/custom-field/InputField/InputField";
import { useTypedForm } from "@/hooks/useTypedForm";
import { Form, Input, InputNumber, Button, Select, Checkbox } from "antd";
// FIXME: Dont use Controller, use useTypedForm
import { Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import classes from "./styles.module.scss";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/* eslint-enable no-template-curly-in-string */

function SignupForm(props: any) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useTypedForm("SignUp");
  return (
    <div className={classes.wrapper}>
      <form style={{ width: "600px" }} onSubmit={handleSubmit(props.onSubmit)}>
        <h3 style={{ fontWeight: "bold", fontSize: "20px" }}>Đăng Ký</h3>
        <p style={{ marginTop: "40px" }}>
          Chỉ với vài bước đơn giản để tạo tài khoản
          <br /> Dễ dàng quản lý công ty của bạn!
        </p>
        <div className={classes.form_group}>
          <div className={classes.form_item}>
            <InputField label="Tên công ty" isRequired>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    size="large"
                    placeholder="Nhập tên công ty"
                  />
                )}
              />
              {errors.name && (
                <span className={classes.required}>{errors.name.message}</span>
              )}
            </InputField>
          </div>
          <div className={classes.form_item}>
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
          </div>
        </div>

        <div className={classes.form_group}>
          <div className={classes.form_item}>
            <InputField label="Số điện thoại">
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    className={classes.form_item}
                    size="large"
                    placeholder="Nhập số điên thoại"
                  />
                )}
              />
              {errors.phone && (
                <span className={classes.required}>{errors.phone.message}</span>
              )}
            </InputField>
          </div>
          <div className={classes.form_item}>
            <InputField label="Địa chỉ">
              <Controller
                name="address"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    className={classes.form_item}
                    size="large"
                    placeholder="Nhập địa chỉ"
                  />
                )}
              />
              {errors.address && (
                <span className={classes.required}>
                  {errors.address.message}
                </span>
              )}
            </InputField>
          </div>
        </div>
        <div className={classes.form_group}>
          <div className={classes.form_item}>
            <InputField label="Mật khẩu" isRequired>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <Input {...field} type="password" size="large" />
                )}
              />
              {errors.password && (
                <span className={classes.required}>
                  {errors.password.message}
                </span>
              )}
            </InputField>
          </div>
          <div className={classes.form_item}>
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
          </div>
        </div>
        <InputField label="">
          <Controller
            name="angreement"
            control={control}
            render={({ field }) => <Checkbox>Tôi đã đọc điều khoản</Checkbox>}
          />
        </InputField>
        <Form.Item>
          <Button
            style={{ width: "200px", marginBottom: "10px" }}
            type="primary"
            htmlType="submit"
            loading={props.loading}
          >
            Đăng Ký
          </Button>
          <p>
            Đã có tài khoản?
            <Link style={{ textDecoration: "underline" }} to={ROUTES.SIGN_IN}>
              Đăng nhập
            </Link>
          </p>
        </Form.Item>
      </form>
    </div>
  );
}
export default SignupForm;
