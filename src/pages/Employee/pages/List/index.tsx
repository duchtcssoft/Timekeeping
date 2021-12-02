import MainBreadcrumb from "@/components/Breadcrumb";
import MainLayout from "@/components/Layout/Layout";
import { useAxios } from "@/hooks/axios/useAxios";
import { EmployeeProps } from "@/models/Employee/EmployeeProps";
import { PlusOutlined, LoadingOutlined } from "@ant-design/icons";
import { Button, Col, Row, Space, Table, Alert, Pagination } from "antd";
import { ColumnsType } from "antd/lib/table";
import { useEffect, useState } from "react";
import EmployeeModal from "../../organisms/EmployeeModal";
import { Search } from "../../organisms/Search";

export const Employee = (props: EmployeeProps) => {
  const [employeeList, setEmployeeList] = useState([] as any);
  const [employee, setEmployee] = useState<EmployeeProps | null>(null);
  const [visible, setVisible] = useState(false);
  const [success, setSuccess] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(1);

  const { response, loading, error, sendData } = useAxios({
    method: "get",
    url: "api/employes",
  });

  useEffect(() => {
    if (response !== null) {
      setEmployeeList(response.data);
    }
  }, [response]);

  const showModal = (employee: EmployeeProps | null) => {
    setEmployee(employee);
    setVisible(true);
  };

  const changePagination = (page: number) => {
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
      render: (e) => (
        <Space size="middle">
          <Button>Chỉnh sửa</Button>
          <Button danger>Xóa</Button>
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
          <EmployeeModal visible={visible} setVisible={setVisible} employee={employee} setSuccess={setSuccess} />
        </Col>
      </Row>
      {success ? <Alert message="Thành công" type="success" /> : <></>}
      {error
        ? <Alert message="Đã có lỗi xảy ra" type="error" />
        :
        <>
          <Table<EmployeeProps>
            columns={columns}
            dataSource={employeeList}
            rowKey="id"
            pagination={false}
            loading={{ indicator: <LoadingOutlined style={{ fontSize: 24 }} spin />, spinning: loading }}
          />
          <Row justify="end" style={{ marginTop: 30 }}>
            <Pagination defaultCurrent={1} total={total} onChange={changePagination} />
          </Row>
        </>}
    </MainLayout>
  );
};
