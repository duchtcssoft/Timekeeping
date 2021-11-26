// hooks
import { useTypedForm } from "@/hooks/useTypedForm";

/**
 * Example
 */
export default function Example() {
  const { watch } = useTypedForm("SignIn");

  const username = watch("username");

  return <div style={{ padding: 30 }}>{username}</div>;
}
