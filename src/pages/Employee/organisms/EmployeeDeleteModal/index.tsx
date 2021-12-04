import { useDeleteEmployee } from "@/api/employee";
import { useStore } from "@/hooks/useStore";
import { EmployeeModalProps } from "@/models/Employee/EmployeeProps";
import { updateModalStatus, updateSuccessStatus } from "@/redux/actions/employee";
import { Modal } from "antd";
import { useDispatch } from "react-redux";

export const EmployeeDeleteModal = (props: EmployeeModalProps) => {
  const dispatch = useDispatch();
  const { employee } = useStore("Employee", "employeeReducer");
  const { visibleAdd, visibleDelete } = useStore("Employee", "modalReducer");
  const { execute, isLoading, response, error } = useDeleteEmployee(employee?.id)();
  
  const handleOk = () => {
    dispatch(updateModalStatus({ visibleAdd, visibleDelete: false }));
    execute({
      data: {
        id: employee?.id,
      },
      cbSuccess: (res) => {
        dispatch(updateSuccessStatus({ success: true }));
        dispatch(updateModalStatus({ visibleAdd, visibleDelete: false }));
      },
    });
  };
  
  const handleCancel = () => {
    dispatch(updateModalStatus({ visibleAdd, visibleDelete: false }));
  };

  return (
    <Modal title="Bạn có chắc chắn xóa" onOk={handleOk} onCancel={handleCancel} visible={visibleDelete}>
      {`Bạn có chăc chắn xóa nhân viên ${employee?.name ?? ""}`}
    </Modal>
  );
};
