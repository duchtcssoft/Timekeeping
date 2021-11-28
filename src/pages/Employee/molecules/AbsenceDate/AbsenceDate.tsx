import { DatePicker, Select } from "antd";
import { Controller } from "react-hook-form";
import { FormInput } from "../FormInput";

const { Option } = Select;

interface IProps {
  control: any;
  styles: any;
  errors: any;
  reason: string | number;
}

const AbsenceDate = ({ control, styles, errors, reason }: IProps) => {
  let absenceEndDate;
  let isShow = false;
  if (reason === "1") {
    isShow = true;
    absenceEndDate =
      <FormInput label="Số phút đi muộn" isRequired>
        <Controller
          name="endDate"
          control={control}
          render={({ field }) =>
            <>
              <Select {...field} defaultValue="Số phút đi muộn" className={styles.form_select}>
                <Option value="1">15 phút</Option>
                <Option value="2">30 phút</Option>
                <Option value="3">60 phút</Option>
              </Select>
              {errors.endDate && <div className={styles.form_error}>{errors.endDate.message}</div>}
            </>}
        />
      </FormInput>;
  } else if (reason === "2") {
    isShow = true;
    absenceEndDate =
      <FormInput label="Ca nghỉ" isRequired>
        <Controller
          name="endDate"
          control={control}
          render={({ field }) =>
            <>
              <Select defaultValue="Ca nghỉ" {...field} className={styles.form_select}>
                <Option value="1">Đi muộn</Option>
                <Option value="2">Nghỉ 1 ngày</Option>
                <Option value="3">Nghỉ dài ngày</Option>
              </Select>
              {errors.endDate && <div className={styles.form_error}>{errors.endDate.message}</div>}
            </>}
        />
      </FormInput>;
  } else if (reason === "3") {
    isShow = true;
    absenceEndDate =
      <FormInput label="Ngày kết thúc nghỉ" isRequired>
        <Controller
          name="endDate"
          control={control}
          render={({ field }) =>
            <>
              <DatePicker
                picker="date"
                placeholder="Ngày kết thúc nghỉ"
                onChange={(date) => field.onChange(date)}
                className={styles.form_select}
              />
              {errors.endDate && <div className={styles.form_error}>{errors.endDate.message}</div>}
            </>}
        />
      </FormInput>;
  } else absenceEndDate = <></>;

  return (
    <>
      {isShow &&
        <FormInput label="Ngày đi muộn" isRequired>
          <Controller
            control={control}
            name="startDate"
            render={({ field }) => (
              <>
                <DatePicker
                  picker="date"
                  placeholder="Chọn ngày"
                  onChange={(date) => field.onChange(date)}
                  className={styles.form_select}
                />
                {errors.startDate && <div className={styles.form_error}>{errors.startDate.message}</div>}
              </>
            )}
          />
        </FormInput>}
      {absenceEndDate}
    </>
  );
};

export default AbsenceDate;
