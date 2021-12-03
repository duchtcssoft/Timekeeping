import {
  Form,
  Input,
  Select,
  Button,
} from "antd";
import styles from "./Formcreate.module.scss";
import { useState } from "react";
import { useRequestOffice } from "@/api/requestOffices";

export default function FormCreate() {
  const { execute } = useRequestOffice();

  const handleFinish = (values: any) => {
    execute({
      data: {
        name: values.name,
        address: values.address,
        province_id: values.provinceId,
        latitude: values.latitude,
        longitude: values.longitude,
        starting_hour: values.startHour,
        ending_hour: values.endHour,
      },
    });
  };
  return (
    <Form
      initialValues={{ remember: true }}
      onFinish={handleFinish}
      labelCol={{ span: 0 }}
      wrapperCol={{ span: 24 }}
      layout="horizontal"
    >
      <Form.Item
        wrapperCol={{ span: 24 }}
        label="Tên"
        name="name"
        className={styles.form_item}
      >
        <Input size="large" />
      </Form.Item>
      <div className={styles.form_field}>
        <Form.Item
          label="Địa chỉ"
          name="address"
          className={styles.form_item}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item
          label="Select"
          className={styles.form_item}
          name="provinceId"
        >
          <Select size="large">
            <Select.Option value={1}>Hà Nội</Select.Option>
            <Select.Option value={2}>TP. Hồ Chí Minh</Select.Option>
          </Select>
        </Form.Item>
      </div>
      <div className={styles.form_field}>
        <Form.Item
          label="Giờ bắt đầu"
          name="startHour"
          className={styles.form_item}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item
          label="Giờ kết thúc"
          name="endHour"
          className={styles.form_item}
        >
          <Input size="large" />
        </Form.Item>
      </div>
      <div className={styles.form_field}>
        <Form.Item
          label="kinh độ"
          name="latitude"
          className={styles.form_item}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item
          label="vĩ độ"
          name="longitude"
          className={styles.form_item}
        >
          <Input size="large" />
        </Form.Item>
      </div>
      <Form.Item>
        <Button htmlType="submit" type="primary">Thêm</Button>
      </Form.Item>
    </Form>
  );
}
