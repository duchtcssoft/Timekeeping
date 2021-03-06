// libs
import * as yup from "yup";

export const schemaSignin = yup
  .object()
  .shape({
    email: yup
      .string()
      .email("Email is invalid")
      .required("username is required"),
    password: yup.string().required("password is required"),
  })
  .required();
