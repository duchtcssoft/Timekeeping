import { useAddOffice, useGetOfficeAction, useRequestOffice } from "@/api/requestOffices";
import "@/styles/index.css";
import "antd/dist/antd.css";
import CreateOffices from "../../components/CreateOffices";
import SearchInput from "../../components/SearchInput";
import TableOffice from "../../components/TableOffice";
import styles from "./ContentOffices.module.scss";
import { useState, useEffect } from "react";

export default function ContentOffices() {
  const { execute: getListOffice, isLoading, response: offices } = useGetOfficeAction();
  useEffect(() => {
    console.log("getListOffice({})", getListOffice({}));
    getListOffice({});
  }, []);

  console.log("đây là:", offices);
  // useEffect(() => {
  //   const fetchTables = async () => {
  //     setLoading(true);
  //     await axios.get(`${API_URL}/offices`,
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${TOKEN}`,
  //         },
  //       }).then((res) => {
  //         setOffices(res.data.data);
  //         console.log(res);
  //         setPageSize(res.data.pagination.perPage);
  //         console.log(res.data.pagination.perPage);
  //         setPage(res.data.pagination.currentPage);
  //         console.log(res.data.pagination.currentPage);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       }).finally(() => {
  //         setLoading(false);
  //       },
  //       );
  //   };
  //   fetchTables();
  // }, []);
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
        <TableOffice />
      </div>
    </div>
  );
}
