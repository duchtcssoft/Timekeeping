import { useAxios } from "@/hooks/axios/useAxios";
import { EmployeeDeleteModalProps } from "@/models/Employee/EmployeeProps";
import { Modal } from "antd";

export const EmployeeDeleteModal = (props: EmployeeDeleteModalProps) => {
  const { sendData } = useAxios({
    method: "delete",
    url: `api/employes/${props.employee?.id ?? 0}`,
  });

  const handleOk = () => {
    props.setDeleteVisible(false);
    sendData();
    props.setSuccess(true);
  };

  const handleCancel = () => {
    props.setDeleteVisible(false);
  };

  return (
    <Modal title="Bạn có chắc chắn xóa" visible={props.deleteVisible} onOk={handleOk} onCancel={handleCancel}>
      {`Bạn có chăc chắn xóa nhân viên ${props.employee?.name ?? ""}`}
    </Modal>
  );
};
