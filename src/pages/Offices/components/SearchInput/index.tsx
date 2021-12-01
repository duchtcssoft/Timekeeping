// libs
import {
  Input, Space,
} from "antd";
import "antd/dist/antd.css";

const { Search } = Input;

export default function SearchInput() {
  const onSearch = (value: any) => console.log(value);
  return (
    <>
      <Space direction="vertical">
        <Search placeholder="input search text" onSearch={onSearch} enterButton size="large" />
      </Space>
    </>
  );
}
