import { useStore } from "@/hooks/useStore";
import ReactHookForm from "@/providers/ReactHookForm";
import { schemaEmployee } from "@/react-hook-form/validations/Employee";
import { updateModalStatus } from "@/redux/actions/employee";
import { Modal } from "antd";
import { useDispatch } from "react-redux";
import EmployeeForm from "../EmployeeForm";

const EmployeeModal = () => {
  const dispatch = useDispatch();
  const { visibleAdd, visibleDelete } = useStore("Employee", "modalReducer");
  const handleCancel = () => {
    dispatch(updateModalStatus({ visibleAdd: false, visibleDelete }));
  };
  return (
    <>
      <Modal
        title="Title"
        visible={visibleAdd}
        onCancel={handleCancel}
        footer={null}
        width={1000}
      >
        <EmployeeForm />
        {/* <ReactHookForm validateSchema={schemaEmployee}>
          <EmployeeForm employee={props.employee} setSuccess={props.setSuccess} setVisible={props.setVisible} visible={props.visible} />
        </ReactHookForm> */}
      </Modal>
    </>
  );
};

export default EmployeeModal;
