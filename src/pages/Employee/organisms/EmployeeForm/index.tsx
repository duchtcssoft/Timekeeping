import { useAxios } from "@/hooks/axios/useAxios";
import { EmployeeProps } from "@/models/Employee/EmployeeProps";
import { FormInput } from "@/pages/Employee/molecules/FormInput";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, DatePicker, Input, Select } from "antd";
import { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import styles from "./style.module.scss";

const { Option } = Select;

const schema = yup.object().shape({
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

const EmployeeForm = () => {
  const { handleSubmit, formState: { errors }, control } = useForm<EmployeeProps>({ resolver: yupResolver(schema) });
  const [employee, setEmployee] = useState<EmployeeProps | null>(null);
  const { response, loading, error, sendData } = useAxios({
    method: "POST",
    url: "/posts",
    data: employee,
    headers: {
      accept: "*/*",
    },
  });

  const onSubmit: SubmitHandler<EmployeeProps> = data => {
    const dataBody = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      password: data.password,
      gender: data.gender,
      date_of_birth: data.date_of_birth.format("YYYY-MM-DD HH:mm:ss"),
      position: "Nhân viên",
      type: 1,
      avatar: "",
    };
    setEmployee(dataBody);
  };

  useEffect(() => {
    if (employee !== null) {
      sendData();
    }
  }, [employee]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput label="Họ và tên" isRequired>
        <Controller
          name="name"
          control={control}
          render={({ field }) => <Input {...field} placeholder="Họ tên" />}
        />
        {errors.name && <span className={styles.form_error}>{errors.name.message}</span>}
      </FormInput>
      <FormInput label="Email" isRequired>
        <Controller
          name="email"
          control={control}
          render={({ field }) => <Input {...field} placeholder="Email" type="email" />}
        />
        {errors.email && <span className={styles.form_error}>{errors.email.message}</span>}
      </FormInput>
      <FormInput label="Số điện thoại" isRequired>
        <Controller
          name="phone"
          control={control}
          render={({ field }) => <Input {...field} placeholder="Số điện thoại" />}
        />
        {errors.phone && <span className={styles.form_error}>{errors.phone.message}</span>}
      </FormInput>
      <FormInput label="Giới tính">
        <Controller
          name="gender"
          control={control}
          render={({ field }) =>
            <Select defaultValue="male" {...field}>
              <Option value="male" selected>Nam</Option>
              <Option value="female">Nữ</Option>
              <Option value="other">Khác</Option>
            </Select>}
        />
      </FormInput>
      <FormInput label="Văn phòng">
        <Controller
          name="office"
          control={control}
          render={({ field }) =>
            <Select defaultValue="1" {...field}>
              <Option value="1">1</Option>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
            </Select>}
        />
      </FormInput>
      <FormInput label="Mật khẩu" isRequired>
        <Controller
          name="password"
          control={control}
          render={({ field }) => <Input.Password {...field} placeholder="" />}
        />
        {errors.password && <span className={styles.form_error}>{errors.password.message}</span>}
      </FormInput>
      <FormInput label="Nhập lại mật khẩu" isRequired>
        <Controller
          name="passwordConfirmation"
          control={control}
          render={({ field }) => <Input.Password
            {...field}
            placeholder=""
            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />}
        />
        {errors.passwordConfirmation && <span className={styles.form_error}>{errors.passwordConfirmation.message}</span>}
      </FormInput>
      <FormInput label="Ngày sinh">
        <Controller
          control={control}
          name="date_of_birth"
          render={({ field }) => (
            <DatePicker
              picker="date"
              placeholder="Ngày sinh"
              onChange={(date) => field.onChange(date)}
            />
          )}
        />
      </FormInput>
      <FormInput label="Địa chỉ">
        <Controller
          name="address"
          control={control}
          render={({ field }) => <Input placeholder="Địa chỉ" {...field} />}
        />
      </FormInput>
      <FormInput label="">
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </FormInput>
    </form>
  );
};

export default EmployeeForm;
