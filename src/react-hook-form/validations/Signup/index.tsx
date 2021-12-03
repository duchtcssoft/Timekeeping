import * as yup from "yup";

export const schemaSignup = yup
  .object()
  .shape({
    name: yup.string().required("Tên không được để trống"),
    email: yup
      .string()
      .required("Email không được để trống")
      .email("Email chưa đúng định dạng example@gmail.com"),
    phone: yup
      .string()
      .required("")
      .matches(new RegExp("0[0-9]{9}"), "Số điện thoại chưa đúng định dạng"),
    password: yup.string().required("Mật khẩu không được để trống"),
    confirmPassword: yup
      .string()
      .required("")
      .oneOf([yup.ref("password"), null], "Mật khẩu chưa khớp"),
  })
  .required();
