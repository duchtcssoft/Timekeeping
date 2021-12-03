// libs
import "@/styles/index.css";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Modal,
} from "antd";
import "antd/dist/antd.css";
import { useState } from "react";
import AdressMap from "../AddressMap";
import FormCreate from "../FormCreate";

export default function CreateOffices() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)} shape="default" icon={<PlusOutlined />} size="large">
      </Button>
      <Modal
        title="Thêm chi nhánh"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        <div className="site-input-group-wrapper">
          <FormCreate />
        </div>
        {/* <AdressMap /> */}
      </Modal>
    </>
  );
}
