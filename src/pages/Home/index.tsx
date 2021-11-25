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

// TODO: talk

/**
 * Home
 */
export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { magicNumber } = useStore("Home", "exampleReducer");

  return (
    <h1>
      <Button
        onClick={() => {
          router.push(ROUTES.SIGN_IN);
        }}
      >
        Go to Sign in page
      </Button>
      <Button
        onClick={() => {
          notify.success("Success");
        }}
      >
        Alert message success
      </Button>
      <Button
        onClick={() => {
          notify.error("Error");
        }}
      >
        Alert message Error
      </Button>
      <Button
        onClick={() => {
          dispatch(
            updateMagicNumber({
              magicNumber: magicNumber * 3,
            }),
          );
        }}
      >
        Update Magic Number (current-value: {magicNumber})
      </Button>
    </h1>
  );
}
