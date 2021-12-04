import { Col, Row } from "antd";
import styles from "../../organisms/EmployeeForm/style.module.scss";

interface FormInputProps {
  label: string,
  isRequired?: true | false,
  children: React.ReactNode;
}

export const FormInput = (props: FormInputProps) => (
  <Row align="middle" className={styles.form_input}>
    <Col md={4} sm={24}>{props.label} {props.isRequired !== undefined ? <span className={styles.form_require}>*</span> : <></>}</Col>
    <Col md={20} sm={24}>{props.children}</Col>
  </Row>
);
