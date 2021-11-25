// libs
import * as yup from "yup";

export const schemaSignin = yup
  .object({
    username: yup.string().required(),
    password: yup.string().required(),
  })
  .required();
