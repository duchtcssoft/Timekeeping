// libs
import { Button } from "@mui/material";
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
import TimeKeeping from "./TimeKeeping/TimeKeeping";

// TODO: talk

/**
 * Home
 */
export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { magicNumber } = useStore("Home", "exampleReducer");

  return (
    <MainLayout>
      <h1>Welcome to homepage</h1>
      {/* <TimeKeeping /> */}
    </MainLayout>
  );
}
