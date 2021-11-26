import classes from "./TimeKeepingForm.module.scss";
import { Input, Select } from "antd";

export default function TimeKeepingForm() {
  // const webcamRef = React.useRef(null);
  // const [imgSrc, setImgSrc] = React.useState(null);

  // const capture = React.useCallback(() => {
  //   const imageSrc = webcamRef.current?.getScreenshot();
  //   setImgSrc(imageSrc);
  // }, [webcamRef, setImgSrc]);

  const { Option } = Select;
  const { TextArea } = Input;
  const handleChange = (value: any) => {
    console.log(`selected ${value}`);
  };
  const onChange = (e: any) => {
    console.log("Change:", e.target.value);
  };
  const provinceData = ["Zhejiang", "Jiangsu"];
  return (
    <div className={classes.wrapper}>
      <div className={classes.row}>
        <div className={classes.col}>
          <Select
            defaultValue="Select..."
            style={{ width: "100%" }}
            onChange={handleChange}
          >
            {provinceData.map((province) => (
              <Option value={province} key={province}>
                {province}
              </Option>
            ))}
          </Select>
        </div>
        <div className={classes.col}>
          <TextArea showCount maxLength={100} onChange={onChange} />
        </div>
      </div>
      <div className={classes.row}></div>
    </div>
  );
}
