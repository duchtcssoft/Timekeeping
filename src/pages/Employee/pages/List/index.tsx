import { useListEmployee } from "@/api/employee";
import MainBreadcrumb from "@/components/Breadcrumb";
import MainLayout from "@/components/Layout/Layout";
import { useStore } from "@/hooks/useStore";
import { EmployeeProps } from "@/models/Employee/EmployeeProps";
import { setEmployee, updateModalStatus, updateSuccessStatus } from "@/redux/actions/employee";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Alert, Button, Col, Pagination, Row, Space, Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { EmployeeDeleteModal } from "../../organisms/EmployeeDeleteModal";
import EmployeeModal from "../../organisms/EmployeeModal";
import { Search } from "../../organisms/Search";

export const Employee = (props: EmployeeProps) => {
  const dispatch = useDispatch();
  const { success } = useStore("Employee", "successReducer");
  const { visibleAdd, visibleDelete } = useStore("Employee", "modalReducer");
  const { employee } = useStore("Employee", "employeeReducer");

  const [employeeList, setEmployeeList] = useState([] as any);
  // const [employee, setEmployee] = useState<EmployeeProps | null>(null);
  const [message, setMessage] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(1);

  const { execute, isLoading, response, error } = useListEmployee();

  useEffect(() => {
    execute({
      cbSuccess: (res) => {
        setEmployeeList(res.data);
        setTotal(res.pagination.total);
      },
    });
  }, []);

  useEffect(() => {
    if (success) {
      execute({
        cbSuccess: (res) => {
          setEmployeeList(res.data);
          setTotal(res.pagination.total);
          setMessage(true);
        },
      });
    }

    return () => {
      setTimeout(() => {
        setMessage(false);
        dispatch(updateSuccessStatus({ success: !success }));
      }, 2000);
    };
  }, [success]);

  const showModal = (employee: EmployeeProps | null, type: number = 1) => {
    dispatch(setEmployee({ employee }));
    // setEmployee(employee);
    if (type === 1) {
      dispatch(updateModalStatus({ visibleAdd: true, visibleDelete }));
    } else {
      dispatch(updateModalStatus({ visibleAdd, visibleDelete: true }));
    }
  };

  const changePagination = (page: number) => {
    execute({
      params: {
        page,
      },
      cbSuccess: (res) => {
        setEmployeeList(res.data);
        setTotal(res.pagination.total);
      },
    });
    setCurrentPage(page);
  };

  const columns: ColumnsType<EmployeeProps> = [
    {
      key: "id",
      title: "Mã nhân viên",
      dataIndex: "id",
    },
    {
      key: "name",
      title: "Tên",
      dataIndex: "name",
    },
    {
      key: "email",
      title: "Email",
      dataIndex: "email",
    },
    {
      key: "phone",
      title: "Điện thoại",
      dataIndex: "phone",
    },
    {
      key: "date_of_birth",
      title: "Ngày sinh",
      dataIndex: "date_of_birth",
    },
    {
      key: "address",
      title: "Địa chỉ",
      dataIndex: "address",
    },
    {
      key: "office",
      title: "Văn phòng",
      dataIndex: "office",
    },
    {
      key: "action",
      title: "Thao tác",
      render: (employee) => (
        <Space size="middle">
          <Button onClick={() => showModal(employee)}>Chỉnh sửa</Button>
          <Button danger onClick={() => showModal(employee, 2)}>Xóa</Button>
        </Space>
      ),
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
            <PlusOutlined />Thêm nhân viên
          </Button>
          <EmployeeModal />
          <EmployeeDeleteModal />
        </Col>
      </Row>
      {message ? <Alert message="Thành công" type="success" /> : <></>}
      {error
        ? <Alert message="Đã có lỗi xảy ra" type="error" />
        :
        <>
          <Table<EmployeeProps>
            columns={columns}
            dataSource={employeeList}
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
};
