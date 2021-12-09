// libs
import { useDispatch } from "react-redux";
// hooks
import { useRouter } from "@/hooks/router/useRouter";
import { useStore } from "@/hooks/useStore";
// actions
import { updateMagicNumber } from "@/redux/actions/example";
// others
import { notify } from "@/utils/notify";
import { ROUTES } from "@/constants/routers";
import MainLayout from "@/components/Layout/Layout";
import { Button } from "antd";
import { CheckOutlined, CloseOutlined, LoadingOutlined } from "@ant-design/icons";
import { useHistory } from "react-router";
/**
 * Home
 */
export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { magicNumber } = useStore("Home", "exampleReducer");
const history = useHistory();
  return (
    <MainLayout>
      <h1>Welcome to homepage</h1>
      <Button type="primary" onClick={() => (history.push(`${ROUTES.TIME_KEEPING}${ROUTES.CHECK_IN}`))}>
        <CheckOutlined />Chấm Công Ngay
      </Button>
    </MainLayout>
  );
}
