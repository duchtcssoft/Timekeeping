import * as yup from "yup";

export const schemaTimekeeping = yup
  .object()
  .shape({
    office_id: yup.string().required("Chưa chọn chi nhánh làm việc"),
    office_shifts_id: yup.string().required("Chưa chọn ca làm việc"),
  })
  .required();
