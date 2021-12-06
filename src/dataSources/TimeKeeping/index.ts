import { TimeKeepingProps } from "@/models/TimeKeeping/TimeKeepingProps";
import { ColumnsType } from "antd/lib/table";
import { Table, Tag, Space } from "antd";

export const columnsTimeKeeping: ColumnsType<TimeKeepingProps> = [
  {
    key: "user_id",
    title: "Mã nhân viên",
    dataIndex: "user_id",
  },
  {
    key: "user_id",
    title: "Tên Nhân Viên",
    dataIndex: "user_id",
  },
  {
    key: "created_at",
    title: "Ngày",

    // dataIndex: "created_at",
  },
  {
    key: "office_id",
    title: "Chi Nhánh",
    dataIndex: "office_id",
  },
  {
    key: "office_shifts_id",
    title: "Ca Làm Việc",
    dataIndex: "office_shifts_id",
  },
  {
    key: "checkin",
    title: "Check In Time",
    dataIndex: "checkin",
  },
  {
    key: "checkout",
    title: "Check Out Time",
    dataIndex: "checkout",
  },
  {
    key: "checkout_note",
    title: "Trạng thái",
    dataIndex: "checkin_note",

  },
  {
    title: "Action",
    key: "action",
    render: text => "name",
  },
];
