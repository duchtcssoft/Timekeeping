// libs
import { Button } from "antd";
// hooks
import { useTypedForm } from "@/hooks/useTypedForm";

/**
 * SubmitBtn
 */
export default function SubmitBtn() {
  const { getValues } = useTypedForm("SignIn");

  return (
    <Button
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
