// libs
import {
  Button, Table, Modal,
} from "antd";
import { ColumnType } from "antd/lib/table";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL, TOKEN } from "../../../../constants/BaseURL/Config";
import EditOffices from "../EditOffices";
import styles from "./Listmanager.module.scss";

// const data = [
//   {
//     name: "csss",
//     address: "",
//     province_id: "",
//     startworking: "",
//     stopworking: "",
//   },
// ];

export default function TableOffice() {
  const [loading, setLoading] = useState(false);
  const [offices, setOffices] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(7);

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
      render: (record) => (
        <>
          <EditOffices />
          <Button
            onClick={() => {
              onHandlDelete(record);
            }}
            type="default"
            shape="default"
            size="small"
            style={{ color: "red", marginLeft: 12 }}
          >
            Delete
          </Button>
        </>
      ),
    },
  ];

  useEffect(() => {
    const fetchTables = async () => {
      setLoading(true);
      await axios.get(`${API_URL}/offices`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${TOKEN}`,
          },
        }).then((res) => {
          setOffices(res.data.data);
          console.log(res);
          setPageSize(res.data.pagination.perPage);
          console.log(res.data.pagination.perPage);
          setPage(res.data.pagination.currentPage);
          console.log(res.data.pagination.currentPage);
        })
        .catch((error) => {
          console.log(error);
        }).finally(() => {
          setLoading(false);
        },
        );
    };
    fetchTables();
  }, []);

  const onHandlDelete = (record: any) => {
    Modal.confirm({
      title: "bạn có chắc chắn muốn xoá chi nhánh này không?",
      okType: "danger",
      onOk: () => {
        setOffices((pre: never[]) =>
          pre.filter((office: any) => console.log(record)));
      },
    });
  };
  // const handleEdit = () => {

  // };
  return (
    <div className={styles.listtable}>
      <Table
        loading={loading}
        columns={columns}
        dataSource={offices}
        pagination={{
          current: page,
          pageSize,
          onChange: (page, pageSize) => {
            setPage(page);
            setPageSize(pageSize);
          },
        }}
      />
    </div>
  );
}
