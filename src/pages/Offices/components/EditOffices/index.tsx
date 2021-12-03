import "@/styles/index.css";
import {
  Button,
  Modal,
} from "antd";
import "antd/dist/antd.css";
import { useState, useEffect } from "react";
import AdressMap from "../AddressMap";
import FormEdit from "../FormEdit";
// import axios from "axios";
import styles from "./Editoffices.module.scss";

export default function EditOffices() {
  const [visible, setVisible] = useState(false);

  const handleSubmit = () => {
    setVisible(false);
  };
  const handleEdit = () => {
    setVisible(true);
  };

  return (
    <>
      <Button type="primary" onClick={() => handleEdit()} shape="default" size="small">
        Edit
      </Button>
      <Modal
        className={styles.modal_content}
        title="Sửa chi nhánh"
        centered
        visible={visible}
        onOk={() => handleSubmit()}
        onCancel={() => setVisible(false)}
        width={1000}
        style={{ overflow: "hidden", padding: "50px 0" }}
      >
        <div className="site-input-group-wrapper">
          <FormEdit />
        </div>
        {/* <AdressMap /> */}
      </Modal>
    </>
  );
}
