/* eslint-disable react/button-has-type */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
// eslint-disable-next-line no-use-before-define
import React, { useContext, useState, useEffect, useRef } from "react";
import { Table, Input, Popconfirm, Form } from "antd";
import { FormInstance } from "antd/lib/form";
import { Unsubscribe } from "redux";
import axios from "axios";
import Cookie from "universal-cookie";
import EditShifts from "../EditShifts/EditShifts";

const EditableContext = React.createContext<FormInstance<any> | null>(null);
const cookie = new Cookie();

interface Item {
  readonly key: string;
  name: string;
  starting_hour: string;
  ending_hour: string;
  starting_minutes: string;
  ending_minutes: string;
  coefficient: number;
  status: number;
  break_time: string;
  // office_id: string;
}

interface EditableRowProps {
  index: number;
}

const EditableRow: React.FC<EditableRowProps> = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

interface EditableCellProps {
  title: React.ReactNode;
  editable: boolean;
  children: React.ReactNode;
  dataIndex: keyof Item;
  record: Item;
  handleSave: (record: Item) => void;
}

const EditableCell: React.FC<EditableCellProps> = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef<Input>(null);
  const form = useContext(EditableContext)!;

  useEffect(() => {
    if (editing) {
      inputRef.current!.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({ [dataIndex]: record[dataIndex] });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log("Save failed:", errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{ margin: 0 }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} không hợp lệ.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{ paddingRight: 24 }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

type EditableTableProps = Parameters<typeof Table>[0];

type DataType = Item;

interface EditableTableState {
  dataSource: DataType[];
  count: number;
}

type ColumnTypes = Exclude<EditableTableProps["columns"], undefined>;

export default class EditableTable extends React.Component<
  EditableTableProps,
  EditableTableState
> {
  columns: (ColumnTypes[number] & { editable?: boolean; dataIndex: string })[];

  private unsub?: Unsubscribe;

  constructor(props: EditableTableProps) {
    super(props);
    this.columns = [
      {
        title: "Mã ca",
        dataIndex: "id",
        width: "20px",
      },
      {
        title: "Tên ca",
        dataIndex: "name",
        width: "10%",
      },
      {
        title: "Bắt đầu",
        dataIndex: "starting_hour",
      },
      {
        title: "Kết thúc",
        dataIndex: "ending_hour",
      },
      {
        title: "Hệ số",
        dataIndex: "coefficient",
      },
      {
        title: "Giờ nghỉ",
        dataIndex: "break_time",
      },
      {
        title: "#",
        dataIndex: "operation",
        width: "50px",
        render: (_, record: any) => (
          <>
            <div
              className="action"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Popconfirm
                title="Xóa ca làm việc?"
                // onConfirm={() => this.handleDelete(record)}
              >
                <a style={{ fontSize: "13px", color: "red" }}>Delete</a>
              </Popconfirm>
              <EditShifts />
            </div>
          </>
        ),
      },
    ];

    this.state = {
      dataSource: [],
      // eslint-disable-next-line react/no-unused-state
      count: 0, //
    };
  }

  async componentDidMount() {
    const token = cookie.get("token");
    await axios
      .get(
        `${process.env.REACT_APP_DOMAIN_URL}api/office-shifts?page=1&limit=6&office_id=3`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          // eslint-disable-next-line @typescript-eslint/comma-dangle
        }
      )
      .then((res) => {
        const tmp: any = [];
        let num = 0;
        res.data.data.forEach((e: Item) => {
          e.starting_hour =
            Number(e.starting_hour) > 9
              ? `${e.starting_hour}`
              : `0${e.starting_hour}`;
          e.starting_minutes =
            Number(e.starting_minutes) > 9
              ? `${e.starting_minutes}`
              : `0${e.starting_minutes}`;
          e.ending_hour =
            Number(e.ending_hour) > 9
              ? `${e.ending_hour}`
              : `0${e.ending_hour}`;
          e.ending_minutes =
            Number(e.ending_minutes) > 9
              ? `${e.ending_minutes}`
              : `0${e.ending_minutes}`;
          e.starting_hour += `:${e.starting_minutes}`;
          e.ending_hour += `:${e.ending_minutes}`;
          tmp.push(e);
          num += 1;
        });
        this.setState({
          // eslint-disable-next-line react/no-access-state-in-setstate
          count: this.state.count + num,
          dataSource: tmp,
        });
      })
      .catch((e) => {
        // eslint-disable-next-line no-alert
        alert("Có lỗi xảy ra, vui lòng thử lại sau");
      });
  }

  handleDelete = (key: React.Key) => {
    // const dataSource = [...this.state.dataSource];
    // this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
  };

  render() {
    const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map((col) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: (record: DataType) => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          // handleSave: this.handleSave,
        }),
      };
    });
    return (
      <div>
        <Table
          components={components}
          rowClassName={() => "editable-row"}
          bordered
          dataSource={dataSource}
          columns={columns as ColumnTypes}
          rowKey="id"
        />
      </div>
    );
  }
}
