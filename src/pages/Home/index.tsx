// libs
import { useDispatch } from "react-redux";
import { useRouter } from "@/hooks/router/useRouter";
import { useStore } from "@/hooks/useStore";

import { notify } from "@/utils/notify";
import { ROUTES } from "@/constants/routers";
import MainLayout from "@/components/Layout/Layout";
import Offices from "../Offices";

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { magicNumber } = useStore("Home", "exampleReducer");

  return (
    <MainLayout>
      <Offices />
    </MainLayout>
  );
}
