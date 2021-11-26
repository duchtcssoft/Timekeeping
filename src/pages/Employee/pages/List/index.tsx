import MainLayout from "@/components/Layout/Layout";
import { useEffect, useState } from "react";
import { Table, Space, Input, Button } from "antd";
import { ColumnsType } from "antd/lib/table";
import { Search } from "../../molecules/Search";
import axios from "axios";
import { config } from "@/config/breare-token";

interface EmployeeProps {
  // eslint-disable-next-line react/no-unused-prop-types
  id: number;
  // eslint-disable-next-line react/no-unused-prop-types
  name: string;
   // eslint-disable-next-line react/no-unused-prop-types
  email: string;
   // eslint-disable-next-line react/no-unused-prop-types
  phone: string;
   // eslint-disable-next-line react/no-unused-prop-types
  gender?: string;
   // eslint-disable-next-line react/no-unused-prop-types
  dateBirth?: string;
   // eslint-disable-next-line react/no-unused-prop-types
  address?: string;
   // eslint-disable-next-line react/no-unused-prop-types
  office?: string;
}

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
    key: "dateBirth",
    title: "Ngày sinh",
    dataIndex: "dateBirth",
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
    render: () => (
      <Space size="middle">
        <a>Chỉnh sửa</a>
        <a>Xóa</a>
      </Space>
    ),
  },
];

const data: EmployeeProps[] = [
  {
    id: 1,
    name: "Tiphanie Coxwell",
    email: "tcoxwell0@abc.net.au",
    phone: "105 549 7336",
    gender: "Male",
    dateBirth: "13/08/2019",
    address: "0 South Hill",
    office: "Zemlak-Zieme",
  },
  {
    id: 2,
    name: "Hazel McCrystal",
    email: "hmccrystal1@mtv.com",
    phone: "691 855 3543",
    gender: "Male",
    dateBirth: "09/11/2017",
    address: "88 Center Center",
    office: "Heller, Sipes and Kshlerin",
  },
  {
    id: 3,
    name: "Cchaddie Bucktrout",
    email: "cbucktrout2@clickbank.net",
    phone: "277 217 8464",
    gender: "Female",
    dateBirth: "06/01/2018",
    address: "20597 Del Sol Street",
    office: "Nader, Cole and Hudson",
  },
  {
    id: 4,
    name: "Yolanthe Carmody",
    email: "ycarmody3@over-blog.com",
    phone: "492 867 8729",
    gender: "Female",
    dateBirth: "24/09/2020",
    address: "28743 Bobwhite Center",
    office: "McClure LLC",
  },
  {
    id: 5,
    name: "Aloin Anthiftle",
    email: "aanthiftle4@google.com.au",
    phone: "641 789 4424",
    gender: "Female",
    dateBirth: "14/04/2018",
    address: "1 Maple Wood Pass",
    office: "Abshire-Runolfsson",
  },
  {
    id: 6,
    name: "Anne Cannell",
    email: "acannell5@booking.com",
    phone: "547 958 3721",
    gender: "Female",
    dateBirth: "14/05/2019",
    address: "5085 Waywood Pass",
    office: "Hodkiewicz, Walter and Ondricka",
  },
  {
    id: 7,
    name: "Keefer Rzehor",
    email: "krzehor6@google.fr",
    phone: "788 207 6100",
    gender: "Female",
    dateBirth: "15/11/2017",
    address: "0771 Warrior Street",
    office: "Upton-Schroeder",
  },
  {
    id: 8,
    name: "Christin Fripps",
    email: "cfripps7@narod.ru",
    phone: "513 754 5154",
    gender: "Female",
    dateBirth: "08/10/2018",
    address: "691 Claremont Hill",
    office: "Johnston, Hodkiewicz and Monahan",
  },
  {
    id: 9,
    name: "Tab Pree",
    email: "tpree8@domainmarket.com",
    phone: "382 354 8133",
    gender: "Female",
    dateBirth: "20/02/2021",
    address: "0057 Cody Trail",
    office: "Mann-Hyatt",
  },
  {
    id: 10,
    name: "Stanly Mallaby",
    email: "smallaby9@slate.com",
    phone: "443 695 2890",
    gender: "Male",
    dateBirth: "18/12/2016",
    address: "58396 Graceland Terrace",
    office: "Dickinson-Schmitt",
  },
  {
    id: 11,
    name: "Bernetta Breche",
    email: "bbrechea@github.io",
    phone: "112 464 1872",
    gender: "Female",
    dateBirth: "05/12/2018",
    address: "8 Welch Place",
    office: "Baumbach-Hegmann",
  },
  {
    id: 12,
    name: "Robbie OSirin",
    email: "rosirinb@sciencedirect.com",
    phone: "850 353 5490",
    gender: "Male",
    dateBirth: "04/10/2016",
    address: "3670 Ridge O'ak Street",
    office: "Kunze Group",
  },
  {
    id: 13,
    name: "Madelle Flewett",
    email: "mflewettc@abc.net.au",
    phone: "160 483 8558",
    gender: "Female",
    dateBirth: "30/10/2019",
    address: "8 Hazelcrest Avenue",
    office: "Leannon-MacGyver",
  },
  {
    id: 14,
    name: "Powell Le Maitre",
    email: "pled@youtu.be",
    phone: "121 148 6429",
    gender: "Female",
    dateBirth: "15/02/2021",
    address: "5 Milwaukee Junction",
    office: "Pfeffer Inc",
  },
  {
    id: 15,
    name: "Linnie Flattman",
    email: "lflattmane@ow.ly",
    phone: "475 789 6239",
    gender: "Female",
    dateBirth: "05/07/2016",
    address: "291 Scott Terrace",
    office: "Prosacco, Frami and Hills",
  },
  {
    id: 16,
    name: "Lay Best",
    email: "lbestf@1und1.de",
    phone: "855 728 5590",
    gender: "Male",
    dateBirth: "31/10/2018",
    address: "53145 Tennessee Park",
    office: "Romaguera, O'Kon and Effertz",
  },
  {
    id: 17,
    name: "Rafaelia Cella",
    email: "rcellag@google.com.br",
    phone: "980 347 2583",
    gender: "Female",
    dateBirth: "12/06/2017",
    address: "3 Waywood Center",
    office: "Balistreri-Reichel",
  },
  {
    id: 18,
    name: "Kippar Giacobini",
    email: "kgiacobinih@bing.com",
    phone: "621 242 3098",
    gender: "Female",
    dateBirth: "20/04/2020",
    address: "434 Rockefeller Avenue",
    office: "Nienow-Stiedemann",
  },
  {
    id: 19,
    name: "Teresita Polo",
    email: "tpoloi@vk.com",
    phone: "542 879 8916",
    gender: "Male",
    dateBirth: "27/06/2018",
    address: "7915 Center Drive",
    office: "McLaughlin Group",
  },
  {
    id: 20,
    name: "Lita Otley",
    email: "lotleyj@youku.com",
    phone: "761 204 5552",
    gender: "Female",
    dateBirth: "16/12/2019",
    address: "8695 4th Plaza",
    office: "Kautzer-Bergnaum",
  },
];
const API_URL = process.env.REACT_APP_API_URL;

export const Employee = (props: EmployeeProps) => {
  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    const getEmployeeList = async () => {
      const result = await axios(
        `${API_URL}/api/employes`,
        config,
      );
      console.log(result);
    };

    getEmployeeList();
  }, []);

  return (
    <MainLayout>
      <Search />

      <Table<EmployeeProps> columns={columns} dataSource={data} rowKey="id" />
    </MainLayout>
  );
};
