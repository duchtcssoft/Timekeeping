import MainLayout from "@/components/Layout/Layout";
import { useEffect, useState } from "react";
import { Table, Space, Button, Row, Col } from "antd";
import { ColumnsType } from "antd/lib/table";
import { Search } from "../../organisms/Search";
import axios from "axios";
import { PlusOutlined } from "@ant-design/icons";
import MainBreadcrumb from "@/components/Breadcrumb";
import AbsenceModal from "../../organisms/AbsenceModal";
import { AbsenceProps } from "@/models/Employee/EmployeeProps";

const data: AbsenceProps[] = [
  {
    id: 1,
    reasonId: 1,
    startDate: "13/08/2019",
    endDate: "13/08/2019",
    user: 1,
    description: "Zemlak-Zieme",
  },
  {
    id: 2,
    reasonId: 1,
    startDate: "13/08/2019",
    endDate: "13/08/2019",
    user: 1,
    description: "Zemlak-Zieme",
  },
  {
    id: 3,
    reasonId: 1,
    startDate: "13/08/2019",
    endDate: "13/08/2019",
    user: 1,
    description: "Zemlak-Zieme",
  },
  {
    id: 4,
    reasonId: 1,
    startDate: "13/08/2019",
    endDate: "13/08/2019",
    user: 1,
    description: "Zemlak-Zieme",
  },
];
const API_URL = process.env.REACT_APP_API_URL;

export const EmployeeAbsence = (props: AbsenceProps) => {
  const [absenceList, setabsenceList] = useState([]);
  const [absence, setAbsence] = useState<AbsenceProps|null>(null);
  const [visible, setVisible] = useState(false);

  const showModal = (e: AbsenceProps|null) => {
    setAbsence(e);
    setVisible(true);
  };

  const columns: ColumnsType<AbsenceProps> = [
    {
      key: "id",
      title: "Mã đơn",
      dataIndex: "id",
    },
    {
      key: "user",
      title: "Người tạo",
      dataIndex: "user",
    },
    {
      key: "reason",
      title: "Lý do",
      dataIndex: "reason",
    },
    {
      key: "startDate",
      title: "Ngày bắt đầu nghỉ",
      dataIndex: "startDate",
    },
    {
      key: "endDate",
      title: "Ngày kết thúc nghỉ",
      dataIndex: "endDate",
    },
    {
      key: "approve",
      title: "Người duyệt",
      dataIndex: "date_of_birth",
    },
    {
      key: "status",
      title: "Trạng thái",
      dataIndex: "status",
    },
    {
      key: "createdAt",
      title: "Ngày tạo đơn",
      dataIndex: "createdAt",
    },
    {
      key: "action",
      title: "Thao tác",
      render: (e) => (
        <Space size="middle">
          <Button onClick={() => showModal(e)}>Chỉnh sửa</Button>
          <Button danger>Xóa</Button>
        </Space>
      ),
    },
  ];

  // useEffect(() => {
  //   const getabsenceList = async () => {
  //     const result = await axios(
  //       `${API_URL}/api/employes`,
  //       config,
  //     );
  //     console.log(result);
  //   };

  //   getabsenceList();
  // }, []);

  return (
    <MainLayout>
      <MainBreadcrumb />
      <Row justify="space-between">
        <Col sm={24} md={16}>
          <Search />
        </Col>
        <Col>
          <Button type="primary" onClick={() => showModal(null)}>
            <PlusOutlined />Tạo đơn
          </Button>
          <AbsenceModal visible={visible} setVisible={setVisible} />
        </Col>
      </Row>
      <Table<AbsenceProps> columns={columns} dataSource={data} rowKey="id" />
    </MainLayout>
  );
};
