import { Col, Row } from "antd";
import styles from "./InputField.module.scss";

interface FormInputProps {
  label: string;
  isRequired?: true | false;
  children: React.ReactNode;
}

export const InputField = (props: FormInputProps) => (
  <Row
    align="middle"
    className={styles.form_input}
    style={{ maxWidth: "100%", display: "block" }}
  >
    <Col>
      {props.label && props.label}
      {props.isRequired !== undefined ? (
        <span className={styles.form_require}>*</span>
      ) : (
        <></>
      )}
    </Col>
    <Col>{props.children}</Col>
  </Row>
);
