import { useDeleteEmployee } from "@/api/employee";
import { EmployeeModalProps } from "@/models/Employee/EmployeeProps";
import { Modal } from "antd";

export const EmployeeDeleteModal = (props: EmployeeModalProps) => {
  const { execute, isLoading, response, error } = useDeleteEmployee(props.employee?.id)();

  const handleOk = () => {
    props.setVisible(false);
    execute({
      data: {
        id: props.employee?.id,
      },
      cbSuccess: (res) => {
        props.setSuccess(true);
        props.setVisible(false);
      },
    });
  };

  const handleCancel = () => {
    props.setVisible(false);
  };

  return (
    <Modal title="Bạn có chắc chắn xóa" visible={props.visible} onOk={handleOk} onCancel={handleCancel}>
      {`Bạn có chăc chắn xóa nhân viên ${props.employee?.name ?? ""}`}
    </Modal>
  );
};
