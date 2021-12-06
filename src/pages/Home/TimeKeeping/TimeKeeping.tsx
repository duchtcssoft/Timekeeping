import { useGetTimeKeepingList } from "@/api/TimeKeeping/TimeKeepingList";
import MainBreadcrumb from "@/components/Breadcrumb";
import MainLayout from "@/components/Layout/Layout";
import { TimeKeepingProps } from "@/models/TimeKeeping/TimeKeepingProps";
import { Search } from "@/pages/Employee/molecules/Search";
import { setTimeKeeping, updateModalStatus } from "@/redux/actions/timeKeeping";
import { LoadingOutlined, CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Alert, Button, Col, Pagination, Row, Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import { useState } from "react";
import { useDispatch } from "react-redux";
import TimeKeepingModal from "./Modal";

export default function TimeKeeping() {
  const dispatch = useDispatch();

  const [message, setMessage] = useState(false);
  const { execute, isLoading, response, error } = useGetTimeKeepingList();
  const [timeKeepingList, setTimeKeepingList] = useState([] as any);
  const [total, setTotal] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const showModal = (timeKeeping: TimeKeepingProps | null, type: number = 1) => {
    dispatch(setTimeKeeping({ timeKeeping }));
    // setEmployee(employee);
    if (type === 1) {
      dispatch(updateModalStatus({ visibleCheckIn: true, visibleCheckOut: false }));
    } else {
      dispatch(updateModalStatus({ visibleCheckIn: false, visibleCheckOut: true }));
    }
  };

  const changePagination = (page: number) => {
    execute({
      params: {
        page,
      },
      cbSuccess: (res) => {
        setTimeKeepingList(res.data);
        setTotal(res.pagination.total);
      },
    });
    setCurrentPage(page);
  };
  const columns: ColumnsType<TimeKeepingProps> = [
    {
      key: "id",
      title: "Mã nhân viên",
      dataIndex: "id",
    },
    {
      key: "date",
      title: "Ngày",
      dataIndex: "date",
    },
    {
      key: "office",
      title: "Chi Nhánh",
      dataIndex: "office",
    },
    {
      key: "officeShift",
      title: "Điện thoại",
      dataIndex: "officeShift",
    },
    {
      key: "time",
      title: "Thời Gian",
      dataIndex: "time",
    },
    {
      key: "status",
      title: "Trạng thái",
      dataIndex: "status",
    },
  ];
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
          <Button type="primary" onClick={() => showModal(null)}>
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
            columns={columns}
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
