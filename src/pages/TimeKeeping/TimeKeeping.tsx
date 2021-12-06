import { useGetTimeKeepingList } from "@/api/TimeKeeping/TimeKeepingList";
import MainBreadcrumb from "@/components/Breadcrumb";
import MainLayout from "@/components/Layout/Layout";
import { columnsTimeKeeping } from "@/dataSources/TimeKeeping";
import { TimeKeepingProps } from "@/models/TimeKeeping/TimeKeepingProps";
import { Search } from "@/pages/Employee/molecules/Search";
import { setTimeKeeping, updateModalStatus } from "@/redux/actions/timeKeeping";
import { LoadingOutlined, CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Alert, Button, Col, Pagination, Row, Table } from "antd";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import TimeKeepingModal from "./Modal";

export default function TimeKeeping() {
  const dispatch = useDispatch();

// FIXME: We don't need below timeKeepingList useState and total useState, use above response
  const [message, setMessage] = useState(false);
  const { execute: getTimeKeepingList, isLoading, response: responseTimeKeepingList, error } = useGetTimeKeepingList();
  const [total, setTotal] = useState(1);

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
  useEffect(() => {
    getTimeKeepingList({
      cbSuccess: (res) => {
        console.log("list cham cong: ", res.data);
        const a = res.data[0].created_at;
        console.log(a.slice(0, 10));
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

  return (
    <MainLayout>
      <MainBreadcrumb />
      <Row justify="space-between">
        <Col sm={24} md={16}>
          <Search />
        </Col>
        <Col>
          <Button type="primary" onClick={() => showModal(null)}>
            <CheckOutlined />Chấm Công Vào
          </Button>
          <Button onClick={() => showModal(null)}>
            <CloseOutlined />Chấm Công Ra
          </Button>
          <TimeKeepingModal />
        </Col>
      </Row>
      {message ? <Alert message="Thành công" type="success" /> : <></>}
      {error
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
