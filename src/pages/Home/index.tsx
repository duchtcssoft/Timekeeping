// libs
import { Input, Select } from "antd";
import "./setting.scss";

// hooks

// others
import MainLayout from "@/components/Layout/Layout";
import TableSetting from "@/components/Table/TableSetting";
import axios from "axios";
import FormAddShifts from "@/components/TableAddShifts/FormAddShifts";
import Cookie from "universal-cookie";
import { useEffect, useState } from "react";

const { Search } = Input;
const cookie = new Cookie();

/**
 * Home
 */
function handleChange(value: any) {
  console.log(`selected ${value}`);
}

const onSearch = (value: any) => console.log(value);
async function getOffices() {
  const token = cookie.get("token");
  const tmp: any = [];
  return axios
    .get(`${process.env.REACT_APP_DOMAIN_URL}api/offices?page=1&limit=6`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      res.data.data.forEach((e: any) => {
        tmp.push({ id: e.id, name: e.name });
      });
      return tmp;
    })
    .catch((err) => {
      console.log(err);
    });
}

export default function Home() {
  const { Option } = Select;
  const [name, setName] = useState([]);
  const [offices, setOffices] = useState([]);
  const [officeId, setOfficeId] = useState("");
  useEffect(() => {
    getOffices().then((data) => {
      setOffices(data);
    });
  }, []);

  return (
    <MainLayout>
      <div className="Setting">
        <div className="Search">
          <Search
            placeholder="Tên ca làm việc"
            onSearch={onSearch}
            onChange={handleChange}
            enterButton
          />
        </div>

        <Select
          style={{ width: 120 }}
          onChange={(value) => {
            setOfficeId(value);
          }}
          value={officeId}
        >
          {offices.map((e: any) => (
            <Option value={e.id} name="office_id">
              {e.name}
            </Option>
          ))}
        </Select>
        <FormAddShifts />
      </div>
      <TableSetting />
    </MainLayout>
  );
}
