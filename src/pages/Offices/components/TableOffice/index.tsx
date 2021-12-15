// libs
import { TResponseOffice, useDeleteOffice, useDeleteOfficeAction, useGetOfficeAction } from "@/api/requestOffices";
import {
  Button, Table, Modal,
} from "antd";
import { ColumnType } from "antd/lib/table";
import { number } from "yup/lib/locale";
import EditOffices from "../EditOffices";
import styles from "./Listmanager.module.scss";
import { useStore } from "@/hooks/useStore";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { IListOffice } from "./type";
import { setOfficeList } from "@/redux/actions/offices";

export type Props = {
  office?: IListOffice[]
};

export default function TableOffice(props: Props) {
  const { office } = props;
  const { execute: getListOffice } = useGetOfficeAction();
  const dispatch = useDispatch();
  const columns = [
    {
      title: "Tên",
      dataIndex: "name",
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Mã tỉnh",
      dataIndex: "province_id",
    },
    {
      title: "Giờ bắt đầu",
      dataIndex: "starting_hour",
    },
    {
      title: "Giờ kết thúc",
      dataIndex: "ending_hour",
    },
    {
      title: "Actions",
      render: (office: IListOffice) => (
        <>
          <Button
            type="default"
            onClick={() => onHandleEdit(office)}
            shape="default"
            size="small"
            style={{ color: "blue", marginLeft: 12 }}
          >
            Edit
          </Button>
          <Button
            type="default"
            onClick={() => onHandleDele(office)}
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
  const { execute: deleteOffice, isLoading: loadingOffice } = useDeleteOfficeAction();

  const onHandleDele = (Office: IListOffice) => {
    Modal.confirm({
      title: "bạn có chắc chắn muốn xoá chi nhánh này không?",
      okType: "danger",
      onOk: () => {
        deleteOffice({
          url: `api/offices/${Office.id}`,
          cbSuccess: (res: any) => {
            getListOffice(
              {
                cbSuccess: (res: any) => {
                  dispatch(setOfficeList(res.data));
                },
              },
              );
          },
        });
      },
    });
  };

  const onHandleEdit = (Office: IListOffice) => {
    console.log("idOffice-edit", Office.id);
  };
  return (
    <div className={styles.listtable}>
      <Table
        rowKey="id"
        columns={columns}
        dataSource={office}
      />
    </div>
  );
}
