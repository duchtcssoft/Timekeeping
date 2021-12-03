// libs
import { TResponseOffice, useAddOffice, useDeleteOffice, useRequestOffice } from "@/api/requestOffices";
import {
  Button, Table, Modal,
} from "antd";
import { ColumnType } from "antd/lib/table";
import { number } from "yup/lib/locale";
import EditOffices from "../EditOffices";
import styles from "./Listmanager.module.scss";
import { useStore } from "@/hooks/useStore";

// const offices = [
//   {
//     name: "csss",
//     address: "",
//     province_id: "",
//     startworking: "",
//     stopworking: "",
//   },
// ];

export default function TableOffice({ offices }: { offices: TResponseOffice | null }) {
  const dataOffice = useStore("Office", "pageDataReducer");
  // console.log(abc);
  const columns: (ColumnType<{ a: string, b: string }>)[] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "1",
      // sorter: (a,b) => {a.L}
      // render: (text: any) => <a>{text}</a>,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Province_id",
      dataIndex: "province_id",
      key: "2",
    },
    {
      title: "Start Working",
      dataIndex: "starting_hour",
      key: "3",
    },
    {
      title: "Stop Working",
      dataIndex: "ending_hour",
      key: "4",
    },
    {
      title: "Actions",
      dataIndex: "Actions",
      key: "5",
      render: () => (
        <>
          <EditOffices />
          <Button
            onClick={onHandleDele}
            type="default"
            shape="default"
            size="small"
            style={{ color: "red", marginLeft: 12 }}
          >
            Delete
          </Button>
        </>
      ),
      // render: (record) => (

      // ),
    },
  ];

  const onHandleDele = () => {
    Modal.confirm({
      title: "bạn có chắc chắn muốn xoá chi nhánh này không?",
      okType: "danger",
      onOk: () => {

        // setOffices((pre: never[]) =>
        //   pre.filter((office: any) => console.log(office.id)));
      },
    });
  };

  const handleEdit = () => {
  };
  return (
    <div className={styles.listtable}>
      <Table
        columns={columns}
        dataSource={dataOffice.listOffice}
      />
    </div>
  );
}
