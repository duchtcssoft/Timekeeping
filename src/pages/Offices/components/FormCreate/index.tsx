import {
  Input,
  Select,
  Button,
  FormInstance,
  Form,
} from "antd";
import styles from "./Formcreate.module.scss";

interface Props {
  handleFinish: (value: any) => void;
  onCancel: () => void;
  form?: FormInstance;
}
const validateMessages = {
  required: "Tên không được để trống. Mời bạn nhập thông tin!",
  // types: {
  //   address: " is not a valid email!",
  //   number: " is not a valid number!",
  // },
  // number: {
  //   range: " must be betweenand ",
  // },
};
export default function FormCreate(props: Props) {
  const { handleFinish, onCancel, form } = props;

  return (
    <Form
      // form={form}
      initialValues={{ remember: true }}
      onFinish={handleFinish}
      labelCol={{ span: 0 }}
      wrapperCol={{ span: 24 }}
      layout="horizontal"
      validateMessages={validateMessages}
    >
      <Form.Item
        wrapperCol={{ span: 24 }}
        label="Tên"
        name="name"
        className={styles.form_item}
        rules={[{ required: true }]}
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
        <Button htmlType="submit" type="primary" style={{ marginRight: 12 }}>Thêm</Button>
        <Button onClick={onCancel} type="primary">Huỷ bỏ</Button>
      </Form.Item>
    </Form>
  );
}
