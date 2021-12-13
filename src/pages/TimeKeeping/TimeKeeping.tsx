import { useGetOfficesAction } from "@/api/Offices/GetOffices";
import { useGetTimeKeepingList } from "@/api/TimeKeeping/TimeKeepingList";
import MainBreadcrumb from "@/components/Breadcrumb";
import MainLayout from "@/components/Layout/Layout";
import { ROUTES } from "@/constants/routers";
import { columnsTimeKeeping } from "@/dataSources/TimeKeeping";
import { TimeKeepingProps } from "@/models/TimeKeeping/TimeKeepingProps";
import { setTimeKeeping, updateModalStatus } from "@/redux/actions/timeKeeping";
import { CheckOutlined, CloseOutlined, LoadingOutlined } from "@ant-design/icons";
import { Alert, Button, Col, Pagination, Row, Input, Table } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Search } from "../Employee/molecules/Search";
import TimeKeepingModal from "./Modal";

export default function TimeKeeping() {
  const history = useHistory();
// FIXME: We don't need below timeKeepingList useState and total useState, use above response
  const [message, setMessage] = useState(false);
  const [total, setTotal] = useState(1);
  const [isCheckOut, setIsCheckOut] = useState(1);

  const dispatch = useDispatch();
  const { execute: getTimeKeepingList, isLoading, response: responseTimeKeepingList, error: timeKeepingError } = useGetTimeKeepingList();
  const { execute: getOffice, response: responseOffice, error: OfficeError } = useGetOfficesAction();

  const showModal = (timeKeeping: TimeKeepingProps | null, type: number = 1) => {
    dispatch(setTimeKeeping({ timeKeeping }));
    // setEmployee(employee);
    if (type === 1) {
      dispatch(updateModalStatus({ visibleCheckIn: true, visibleCheckOut: false }));
    } else {
      dispatch(updateModalStatus({ visibleCheckIn: false, visibleCheckOut: true }));
    }
  };

  const timeKeepingList = responseTimeKeepingList?.data;
  const offices = responseOffice?.data;

  useEffect(() => {
    getTimeKeepingList({
      cbSuccess: (res: any) => {
        console.log("list cham cong: ", res.data);
        setIsCheckOut(res.data[res.data.length - 1].checkout_status);
        dispatch(setTimeKeeping(res.data));
        // console.log(a.slice(0, 10));
        // setDate(res.data);
      },
    });
  }, []);
  useEffect(() => {
    getOffice({
      cbSuccess: (res: any) => {
        console.log("Office: ", res?.data);
      },
    });
  }, []);

  const changePagination = (page: number) => {
    getTimeKeepingList({
      params: {
        page,
      },
      cbSuccess: (res: any) => {
        setTotal(res.pagination.total);
      },
    });
    // setCurrentPage(page);
  };

  return (
    <MainLayout>
      <MainBreadcrumb />
      <Row justify="space-between">
        <Col sm={24} md={16}>
        </Col>
        <Col>
          <Button
            disabled={isCheckOut === 0}
            type="primary"
            onClick={() => (history.push(`${ROUTES.TIME_KEEPING}${ROUTES.CHECK_IN}`))}

          >
            <CheckOutlined />Chấm Công Vào
          </Button>
          <Button
            disabled={isCheckOut === 1}
            type="primary"
            style={{ marginLeft: "10px" }}
            onClick={() => (history.push(`${ROUTES.TIME_KEEPING}${ROUTES.CHECK_OUT}`))}
          >
            <CloseOutlined />Chấm Công Ra
          </Button>
          <TimeKeepingModal />
        </Col>
      </Row>
      {message ? <Alert message="Thành công" type="success" /> : <></>}
      {timeKeepingError
        ? <Alert message="Đã có lỗi xảy ra" type="error" />
        :
        <>
          <h2>Lịch Sử Chấm Công</h2>
          <Table<TimeKeepingProps>
            columns={columnsTimeKeeping}
            dataSource={timeKeepingList}
            rowKey="id"
            pagination={false}
            loading={{ indicator: <LoadingOutlined style={{ fontSize: 24 }} spin />, spinning: isLoading }}
          />

          <Row justify="end" style={{ marginTop: 30 }}>
            <Pagination defaultCurrent={2} total={total} onChange={changePagination} />
          </Row>
        </>}
    </MainLayout>
  );
}
