// libs
import { TResponseOffice, useDeleteOffice, useGetOfficeAction } from "@/api/requestOffices";
import {
  Button, Table, Modal,
} from "antd";
import { ColumnType } from "antd/lib/table";
import { number } from "yup/lib/locale";
import EditOffices from "../EditOffices";
import styles from "./Listmanager.module.scss";
import { useStore } from "@/hooks/useStore";
import axios from "axios";
import { TOKEN } from "@/constants/BaseURL/Config";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
// const offices = [
//   {
//     name: "csss",
//     address: "",
//     province_id: "",
//     startworking: "",
//     stopworking: "",
//   },
// ];

export default function TableOffice() {
  const dataOffice = useStore("Office", "pageDataReducer");
  const data = dataOffice.listOffice;
  // console.log(abc);
  const { execute } = useGetOfficeAction();
  // const { execute } = useDeleteOffice(id);

  // const { execute } = useDeleteOffice(idOffice);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Province_id",
      dataIndex: "province_id",
    },
    {
      title: "Start Working",
      dataIndex: "starting_hour",
    },
    {
      title: "Stop Working",
      dataIndex: "ending_hour",
    },
    {
      title: "Actions",
      render: (office: any) => (
        // dataListOffice.map((item: any) => dataListOffice.map((item: any) =>
        <>
          {console.log("office:office", office)}
          <EditOffices />
          <Button
            type="default"
            onClick={() => onHandleDele(office.id)}
            shape="default"
            size="small"
            style={{ color: "red", marginLeft: 12 }}
          >
            Delete
          </Button>
        </>
        // ))
      ),
    },
  ];
  // const idOffice = (dataOffice.listOffice.map((item: any) => item.id));
  const dataListOffice = dataOffice.listOffice;

  const onHandleDele = (idOffice: any) => {
    console.log(dataListOffice);
    Modal.confirm({
      title: "bạn có chắc chắn muốn xoá chi nhánh này không?",
      okType: "danger",
      onOk: () => {
        console.log(idOffice);
        axios({
          method: "delete",
          url: `http://timekeeping.cssdemoco.com/api/offices/${idOffice}`,
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        }).then(res => console.log("res", res),

        ).then(() => execute({}))
          .catch(err => console.log(err.data),
        );
      },
    });
  };

  const handleEdit = () => {
  };
  return (
    <div className={styles.listtable}>
      <Table
        columns={columns}
        dataSource={data}
      />
    </div>
  );
}
