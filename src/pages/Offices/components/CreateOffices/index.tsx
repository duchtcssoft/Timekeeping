// libs

import { useAddOffice } from "@/api/requestOffices";
import "@/styles/index.css";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Modal,
} from "antd";
import "antd/dist/antd.css";
import { useState, useEffect } from "react";
import AdressMap from "../AddressMap";
import FormCreate from "../FormCreate";

interface PropsValue {
  name: string,
  address: string,
  provinceId: number,
  latitude: number,
  longitude: number,
  startHour: string,
  endHour: string,
}

export default function CreateOffices() {
  const [visible, setVisible] = useState(false);
  const { execute } = useAddOffice();

  const handleAdd = (values: PropsValue) => {
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
    setVisible(false);
  };
  const onCancel = () => {
    setVisible(false);
  };
  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)} shape="default" icon={<PlusOutlined />} size="large">
      </Button>
      <Modal
        title="Thêm chi nhánh"
        centered
        visible={visible}
        // onOk={(e: any) => handleAdd(console.log(e))}
        // onCancel={() => setVisible(false)}
        width={1000}
        footer={<></>}
      >
        <div className="site-input-group-wrapper">
          <FormCreate
            handleFinish={handleAdd}
            onCancel={onCancel}
          />
        </div>
        {/* <AdressMap /> */}
      </Modal>
    </>
  );
}
