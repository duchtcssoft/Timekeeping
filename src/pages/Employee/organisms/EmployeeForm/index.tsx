import { useAddEmployee } from "@/api/employee";
import { useStore } from "@/hooks/useStore";
import { EmployeeProps } from "@/models/Employee/EmployeeProps";
import { FormInput } from "@/pages/Employee/molecules/FormInput";
import { updateModalStatus, updateSuccessStatus } from "@/redux/actions/employee";
import { EyeInvisibleOutlined, EyeTwoTone, LoadingOutlined } from "@ant-design/icons";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, DatePicker, Input, Select, Spin } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
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
  const { handleSubmit, formState: { errors }, control, setValue, reset } = useForm<EmployeeProps>({ resolver: yupResolver(schema) });
  const { employee } = useStore("Employee", "employeeReducer");
  const [dateBirth, setDateBirth] = useState<any>(null);
  const { execute, isLoading, response, error } = useAddEmployee(employee?.id ?? 0)();
  const dispatch = useDispatch();
  const { visibleAdd, visibleDelete } = useStore("Employee", "modalReducer");

  const onSubmit: SubmitHandler<EmployeeProps> = data => {
    const dataBody = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      password: data.password,
      gender: data.gender ?? "",
      date_of_birth: data.date_of_birth?.format("YYYY-MM-DD") ?? "",
      position: "Nhân viên",
      type: 1,
      avatar: "",
      address: data.address,
    };
    execute({
      data: dataBody,
      cbSuccess: (res) => {
        reset();
        dispatch(updateSuccessStatus({ success: true }));
        dispatch(updateModalStatus({ visibleAdd: false, visibleDelete }));
      },
    });
  };

  useEffect(() => {
    if (employee !== null) {
      // setEmployee(employee);
      setValue("name", employee.name);
      setValue("email", employee.email);
      setValue("phone", employee.phone);
      if (employee.date_of_birth !== null) {
        setDateBirth(moment(employee.date_of_birth, "YYYY-MM-DD"));
      } else {
        setDateBirth(null);
      }
    } else {
      reset();
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
        {error?.response?.data?.errors?.email && <span className={styles.form_error}>Email đã tồn tại</span>}
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
              value={dateBirth}
              picker="date"
              placeholder="Ngày sinh"
              onChange={(date) => {
                setDateBirth(date);
                field.onChange(date);
              }}
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
        {
          isLoading ? <Spin className={styles.form_spin} indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} /> : <></>
        }
      </FormInput>
    </form>
  );
};

export default EmployeeForm;