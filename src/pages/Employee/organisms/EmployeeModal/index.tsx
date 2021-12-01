import { EmployeeModalProps } from "@/models/Employee/EmployeeProps";
import { Modal } from "antd";
import EmployeeForm from "../EmployeeForm";

const EmployeeModal = (props: EmployeeModalProps) => {
  const handleCancel = () => {
    props.setVisible(false);
  };
  // console.log("modal---", props.employee);
  
  return (
    <>
      <Modal
        title="Title"
        visible={props.visible}
        onCancel={handleCancel}
        footer={null}
        width={1000}
      >
        <EmployeeForm employee={props.employee} setSuccess={props.setSuccess} setVisible={props.setVisible} visible={props.visible} />
      </Modal>
    </>
  );
};

export default EmployeeModal;
