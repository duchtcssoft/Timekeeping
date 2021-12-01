import "@/styles/index.css";
import "antd/dist/antd.css";
import CreateOffices from "../../components/CreateOffices";
import SearchInput from "../../components/SearchInput";
import TableOffice from "../../components/TableOffice";
import styles from "./ContentOffices.module.scss";

export default function ContentOffices() {
  return (
    <div>
      <div className={styles.listManager}>
        <div className={styles.listTop}>
          <div className={styles.topLeft}>
            <SearchInput />
          </div>
          <div className={styles.topRight}>
            <CreateOffices />
          </div>
        </div>
        <TableOffice />
      </div>
    </div>
  );
}
