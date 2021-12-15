import { useAddOffice, useGetOfficeAction, useRequestOffice } from "@/api/requestOffices";
import "@/styles/index.css";
import "antd/dist/antd.css";
import CreateOffices from "../../components/CreateOffices";
import SearchInput from "../../components/SearchInput";
import TableOffice from "../../components/TableOffice";
import styles from "./ContentOffices.module.scss";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useStore } from "@/hooks/useStore";
import { setOfficeList } from "@/redux/actions/offices";

export default function ContentOffices() {
  const { execute: getListOffice, response: office } = useGetOfficeAction();
  const dataOffice = useStore("Office", "pageDataReducer");
  const dispatch = useDispatch();
  useEffect(() => {
    getListOffice(
      {
        cbSuccess: (res: any) => {
          dispatch(setOfficeList(res.data));
        },
      },
      );
  }, []);

  return (
    <div>
      <div className={styles.listManager}>
        <div className={styles.listTop}>
          <div className={styles.topLeft}>
            <SearchInput />
          </div>
          <div className={styles.topRight}>
            <CreateOffices />
          </div>
        </div>
        <TableOffice office={dataOffice.listOffice} />
      </div>
    </div>
  );
}
