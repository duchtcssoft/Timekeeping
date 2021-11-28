import { Modal } from "antd";
import EmployeeForm from "../EmployeeForm";

interface EmployeeModalProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

const EmployeeModal = (props: EmployeeModalProps) => {
  const handleCancel = () => {
    console.log("Clicked cancel button");
    props.setVisible(false);
  };

  return (
    <>
      <Modal
        title="Title"
        visible={props.visible}
        onCancel={handleCancel}
        footer={null}
        width={1000}
      >
        <EmployeeForm />
      </Modal>
    </>
  );
};

export default EmployeeModal;
