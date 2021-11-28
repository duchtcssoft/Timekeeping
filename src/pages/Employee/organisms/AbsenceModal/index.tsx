import { Modal, Button } from "antd";
import { useState } from "react";
import AbsenceForm from "../AbsenceForm";

interface AbsenceModalProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

const AbsenceModal = (props: AbsenceModalProps) => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");

  const handleCancel = () => {
    console.log("Clicked cancel button");
    props.setVisible(false);
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      props.setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  return (
    <>
      <Modal
        title="Title"
        visible={props.visible}
        onCancel={handleCancel}
        width={1000}
        footer={null}
      >
        <AbsenceForm />
      </Modal>
    </>
  );
};

export default AbsenceModal;
