import * as yup from "yup";

export const schemaEmployee = yup.object().shape({
  name: yup.string().required("Tên không được để trống"),
  email: yup.string()
            .required("Email không được để trống")
            .email("Email chưa đúng định dạng example@gmail.com"),
  phone: yup.string()
            .required("Tên không được để trống")
            .matches(new RegExp("0[0-9]{9}"), "Số điện thoại chưa đúng định dạng"),
  password: yup.string().required("Mật khẩu không được để trống"),
  passwordConfirmation: yup.string()
                .required("Mật khẩu không được để trống")
                .oneOf([yup.ref("password"), null], "Mật khẩu chưa khớp"),
});
