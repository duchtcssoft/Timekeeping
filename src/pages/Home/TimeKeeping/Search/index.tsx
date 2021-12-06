import React from "react";
import { Form, Input, Button, Select, Row, Col } from "antd";

interface Props {

}
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 20,
    },
  },
};

export const Search = (props: Props) => {
  const [form] = Form.useForm();

  return (
    <>
      <Form
        {...formItemLayout}
        layout="inline"
        form={form}
        style={{ marginBottom: "20px" }}
      >
        <Row style={{ width: "100%" }} justify="start">
          <Col sm={24} md={10} xl={6} style={{ marginBottom: 15 }}>
            <Form.Item label="Tên">
              <Input placeholder="input placeholder" />
            </Form.Item>
          </Col>
          <Col sm={24} md={10} xl={6}>
            <Form.Item label="Văn phòng">
              <Select>
                <Select.Option value="1">1</Select.Option>
                <Select.Option value="2">2</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col sm={{ span: 2, offset: 1 }}>
            <Form.Item>
              <Button type="primary">Search</Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};
