import * as yup from "yup";

export const schemaForgotPassword = yup
  .object()
  .shape({
    email: yup
      .string()
      .required("Email không được để trống")
      .email("Email chưa đúng định dạng example@gmail.com"),
  })
  .required();
