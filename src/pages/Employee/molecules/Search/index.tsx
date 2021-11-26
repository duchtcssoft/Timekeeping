import React from "react";
import { Form, Input, Button, Select } from "antd";

interface Props {

}

export const Search = (props: Props) => {
  const [form] = Form.useForm();

  return (
    <>
      <Form
        layout="inline"
        form={form}
        style={{ marginBottom: "20px" }}
      >
        <Form.Item label="Tên" style={{ width: "20%" }}>
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="Văn phòng" style={{ width: "20%" }}>
          <Select>
            <Select.Option value="1">1</Select.Option>
            <Select.Option value="2">2</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary">Search</Button>
        </Form.Item>
      </Form>
    </>
  );
};
