// libs
import { Button } from "@mui/material";
// hooks
import { useTypedForm } from "@/hooks/useTypedForm";

/**
 * SubmitBtn
 */
export default function SubmitBtn() {
  const { getValues } = useTypedForm("SignIn");

  return (
    <Button
      variant="contained"
      onClick={() => {
        const { email, password } = getValues();
        // TODO:
        // eslint-disable-next-line no-alert
        alert({ email, password });
      }}
    >
      Sign In
    </Button>
  );
}
