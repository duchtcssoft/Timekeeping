import { EmployeeModalProps } from "@/models/Employee/EmployeeProps";
import ReactHookForm from "@/providers/ReactHookForm";
import { schemaEmployee } from "@/react-hook-form/validations/Employee";
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
        {/* <ReactHookForm validateSchema={schemaEmployee}>
          <EmployeeForm employee={props.employee} setSuccess={props.setSuccess} setVisible={props.setVisible} visible={props.visible} />
        </ReactHookForm> */}
      </Modal>
    </>
  );
};

export default EmployeeModal;
