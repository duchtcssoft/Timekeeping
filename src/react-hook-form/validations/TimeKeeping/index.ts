import * as yup from "yup";

export const schemaTimekeeping = yup
  .object()
  .shape({
    office_id: yup.string().required("password is required"),
    office_shifts_id: yup.string().required("password is required"),
  })
  .required();
