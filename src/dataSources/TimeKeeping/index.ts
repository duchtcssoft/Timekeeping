import { TimeKeepingProps } from "@/models/TimeKeeping/TimeKeepingProps";
import { ColumnsType } from "antd/lib/table";

// const numArr1 = [offices.map((num: any) => (num.id))];
//   console.log("num1: ", numArr1);
//   const numArr2 = [timeKeepingList.map((num: any) => (num.office_id))];
//   console.log("num2: ", numArr2);

export const columnsTimeKeeping: ColumnsType<TimeKeepingProps> = [

  {
    key: "date",
    title: "Ngày",
    // dataIndex: "date",
    render: (timeKeepings) => (
      timeKeepings.created_at.slice(0, 10)
    ),
  },

  {
    key: "office_id",
    title: "Chi Nhánh",
    render: (timeKeepings) => (
      timeKeepings.office_id
    ),

  },
  {
    key: "office_shifts_id",
    title: "Ca Làm Việc",
    dataIndex: "office_shifts_id",
  },
  {
    key: "checkin_time",
    title: "Thời Gian Check In",
    // dataIndex: "date",
    render: (timeKeeping) => (
      `${timeKeeping.checkin_hour} : ${timeKeeping.checkin_minutes}`
    ),
  },
  {
    key: "checkout_time",
    title: "Thời Gian Check Out",
    render: (timeKeeping) => (
      timeKeeping.checkout === null ?
      "" : `${timeKeeping.checkout_hour} : ${timeKeeping.checkout_minutes}`
    ),
  },
  {
    key: "total_time",
    title: "Tổng Thời Gian Làm Việc",
    render: (timeKeeping) => (
      timeKeeping.checkout === null ?
      "" : `${
        timeKeeping.checkout_hour >= timeKeeping.checkin_hour ?
        Math.floor(((timeKeeping.checkout_hour - timeKeeping.checkin_hour) * 60 + (timeKeeping.checkout_minutes - timeKeeping.checkin_minutes)) / 60) :
        Math.floor(((timeKeeping.checkout_hour + 24 - timeKeeping.checkin_hour) * 60 + (timeKeeping.checkout_minutes - timeKeeping.checkin_minutes)) / 60)
      } :
       ${Math.abs(((timeKeeping.checkout_hour - timeKeeping.checkin_hour) * 60 + (timeKeeping.checkout_minutes - timeKeeping.checkin_minutes)) % 60)}`
    ),
  },
  {
    key: "status",
    title: "Trạng thái",
    // dataIndex: "date",
    render: (timeKeeping) => (
      timeKeeping.checkout === null ?
    "Đang làm việc" : "Đã làm xong"),
  },

];
