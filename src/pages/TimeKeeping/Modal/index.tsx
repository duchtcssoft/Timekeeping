import { useStore } from "@/hooks/useStore";
import { updateModalStatus } from "@/redux/actions/timeKeeping";
import { Modal } from "antd";
import { useDispatch } from "react-redux";
import TimeKeepingForm from "../TimeKeepingForm/TimeKeepingForm";

export default function TimeKeepingModal() {
  const dispatch = useDispatch();
  const { visibleCheckIn, visibleCheckOut } = useStore("TimeKeeping", "modalReducer");
  const handleCancel = () => {
    dispatch(updateModalStatus({ visibleCheckIn: false, visibleCheckOut: false }));
  };
  return (
    <>
      <Modal
        title="Title"
        visible={visibleCheckIn}
        onCancel={handleCancel}
        footer={null}
        width={1000}
      >
        <TimeKeepingForm />
      </Modal>
    </>
  );
}
