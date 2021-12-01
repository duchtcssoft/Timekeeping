import {
  Form,
  Input,
  Select,
  Button,
} from "antd";
import styles from "./Formedit.module.scss";
import axios from "axios";

export default function FormEdit() {
  const handleFinish = (values: any) => {
    const body = {
      name: values.name,
      address: values.address,
      province_id: values.provinceId,
      latitude: values.latitude,
      longitude: values.longitude,
      starting_hour: values.startHour,
      ending_hour: values.endHour,
    };

    console.log(values);
    // axios.post("http://8cb2-222-252-111-207.ngrok.io/api/offices", body,
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC84Y2IyLTIyMi0yNTItMTExLTIwNy5uZ3Jvay5pb1wvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTYzODE2MDE2MiwiZXhwIjoxNjM4MTYzNzYyLCJuYmYiOjE2MzgxNjAxNjIsImp0aSI6Ikp5WkFGTXJPcHpHMmRXZHQiLCJzdWIiOjQ5LCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.SX98YcpY-jCDRcLR9WF4CGfv81OomB95kDsZhD1Sz0I",
    //     },
    //   }).then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     console.log("EEERRR: ", error.response.data);
    // });
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
        id="name"
        className={styles.form_item}
      >
        <Input size="large" />
      </Form.Item>
      <div className={styles.form_field}>
        <Form.Item
          label="Địa chỉ"
          name="address"
          id="address"
          className={styles.form_item}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item
          label="Select"
          className={styles.form_item}
          name="provinceId"
          id="province_id"
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
          id="startHour"
          className={styles.form_item}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item
          label="Giờ kết thúc"
          name="endHour"
          id="endHour"
          className={styles.form_item}
        >
          <Input size="large" />
        </Form.Item>
      </div>
      <Form.Item>
        <Button htmlType="submit">Button</Button>
      </Form.Item>
    </Form>
  );
}
