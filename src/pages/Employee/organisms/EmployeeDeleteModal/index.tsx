import { useAxios } from "@/hooks/axios/useAxios";
import { EmployeeModalProps } from "@/models/Employee/EmployeeProps";
import { Modal } from "antd";

export const EmployeeDeleteModal = (props: EmployeeModalProps) => {
  const { sendData } = useAxios({
    method: "delete",
    url: `api/employes/${props.employee?.id ?? 0}`,
  });

  const handleOk = () => {
    props.setVisible(false);
    sendData();
    props.setSuccess(true);
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
