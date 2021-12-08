import { useGetOfficesAction } from "@/api/Offices/GetOffices";
import { useGetTimeKeepingList } from "@/api/TimeKeeping/TimeKeepingList";
import MainBreadcrumb from "@/components/Breadcrumb";
import MainLayout from "@/components/Layout/Layout";
import { ROUTES } from "@/constants/routers";
import { columnsTimeKeeping } from "@/dataSources/TimeKeeping";
import { TimeKeepingProps } from "@/models/TimeKeeping/TimeKeepingProps";
import { Search } from "@/pages/Employee/molecules/Search";
import { setTimeKeeping, updateModalStatus } from "@/redux/actions/timeKeeping";
import { CheckOutlined, CloseOutlined, LoadingOutlined } from "@ant-design/icons";
import { Alert, Button, Col, Pagination, Row, Table } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import TimeKeepingModal from "./Modal";

export default function TimeKeeping() {
  const dispatch = useDispatch();
  const history = useHistory();
// FIXME: We don't need below timeKeepingList useState and total useState, use above response
  const [message, setMessage] = useState(false);
  const [total, setTotal] = useState(1);
  const [offices, setOffices] = useState([]);

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
  // const offices = responseOffice?.data;

  useEffect(() => {
    getTimeKeepingList({
      cbSuccess: (res) => {
        console.log("list cham cong: ", res.data);
        // console.log(a.slice(0, 10));
        // setDate(res.data);
      },
    });
  }, []);
  useEffect(() => {
    getOffice({
      cbSuccess: (res) => {
        console.log("Office: ", res?.data);
        setOffices(res.data);
      },
    });
  }, []);

  const changePagination = (page: number) => {
    getTimeKeepingList({
      params: {
        page,
      },
      cbSuccess: (res) => {
        setTotal(res.pagination.total);
      },
    });
    // setCurrentPage(page);
  };
  // const numArr1 = [offices.map((num: any) => (num.id))];
  // console.log("num1: ", numArr1);
  // const numArr2 = [timeKeepingList.map((num: any) => (num.office_id))];
  // console.log("num2: ", numArr2);

  // const filteredNumArray = numArr1[0].filter(value => numArr2[0].includes(value)).filter((value, index, self) => self.indexOf(value) === index);
  // console.log(filteredNumArray);
  return (
    <MainLayout>
      {/* {offices.map((office: any) => (
        <p key={office?.id}>  { filteredNumArray[0] === office?.id ? office?.name : ""}</p>
      ))} */}
      <MainBreadcrumb />
      <Row justify="space-between">
        <Col sm={24} md={16}>
          <Search />
        </Col>
        <Col>
          <Button type="primary" onClick={() => (history.push(`${ROUTES.TIME_KEEPING}${ROUTES.CHECK_IN}`))}>
            <CheckOutlined />Chấm Công Vào
          </Button>
          <Button style={{ marginLeft: "10px" }} onClick={() => (history.push(`${ROUTES.TIME_KEEPING}${ROUTES.CHECK_OUT}`))}>
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
          <Table<TimeKeepingProps>
            columns={columnsTimeKeeping}
            dataSource={timeKeepingList}
            rowKey="id"
            pagination={false}
            loading={{ indicator: <LoadingOutlined style={{ fontSize: 24 }} spin />, spinning: isLoading }}
          />

          <Row justify="end" style={{ marginTop: 30 }}>
            <Pagination defaultCurrent={1} total={total} onChange={changePagination} />
          </Row>
        </>}
    </MainLayout>
  );
}
