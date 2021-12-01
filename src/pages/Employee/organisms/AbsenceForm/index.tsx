import { AbsenceProps } from "@/models/Employee/EmployeeProps";
import { Input, Select, Button } from "antd";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { FormInput } from "../../molecules/FormInput";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import styles from "./style.module.scss";
import AbsenceDate from "../../molecules/AbsenceDate/AbsenceDate";

const { Option } = Select;
const { TextArea } = Input;

const schema = yup.object().shape({
  reasonId: yup.string().required("Không được để trống lý do").nullable(),
  user: yup.string().required("Không được để trống người duyệt").nullable(),
  startDate: yup.string().required("Không được để trống").nullable(),
  endDate: yup.string().required("Không được để trống").nullable(),
});

const AbsenceForm = () => {
  const { handleSubmit, formState: { errors }, control, setValue, clearErrors, reset } = useForm<AbsenceProps>({ resolver: yupResolver(schema) });
  const [reason, setReason] = useState<number | string>(0);
  const onSubmit: SubmitHandler<AbsenceProps> = data => {
    console.log(data);
    const dataBody = {
    };
    // setAbsence(dataBody);
  };

  const handleChange = (value: any, field?: any) => {
    if (["reasonId", "startDate", "endDate"].includes(field)) {
      clearErrors(["reasonId", "startDate", "endDate"]);
    }
    if (field === "user") {
      clearErrors("user");
    }
    if (field === "reasonId") {
      reset({
        startDate: "",
        endDate: "",
      });
      setReason(value);
    }
    setValue(field, value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <FormInput label="Lý do nghỉ" isRequired>
        <Controller
          name="reasonId"
          control={control}
          render={({ field }) =>
            <>
              <Select {...field} defaultValue="Lý do nghỉ" onChange={(e) => handleChange(e, "reasonId")} className={styles.form_select}>
                <Option value="1">Đi muộn</Option>
                <Option value="2">Nghỉ 1 ngày</Option>
                <Option value="3">Nghỉ dài ngày</Option>
              </Select>
              { errors.reasonId && <div className={styles.form_error}>{errors.reasonId.message}</div> }
            </>}
        />
      </FormInput>
      <AbsenceDate control={control} styles={styles} errors={errors} reason={reason} />
      <FormInput label="Người duyệt" isRequired>
        <Controller
          name="user"
          control={control}
          render={({ field }) =>
            <Select defaultValue="Chọn người duyệt" {...field} className={styles.form_select}>
              <Option value="1" autoFocus>1</Option>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
            </Select>}
        />
        {errors.user && <div className={styles.form_error}>{errors.user.message}</div>}
      </FormInput>
      <FormInput label="Mô tả thêm">
        <Controller
          name="description"
          control={control}
          render={({ field }) =>
            <TextArea rows={4} {...field} />}
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

export default AbsenceForm;
