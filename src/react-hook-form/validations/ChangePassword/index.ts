import * as yup from "yup";

export const schemaChangePassword = yup
  .object()
  .shape({
    password: yup.string().required("Mật khẩu không được để trống"),
    confirmPassword: yup
      .string()
      .required("")
      .oneOf([yup.ref("password"), null], "Mật khẩu chưa khớp"),
  })
  .required();
