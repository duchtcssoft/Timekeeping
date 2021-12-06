import GetLocationFC from "@/components/GetLocation/getLocationFC";
import ReactHookForm from "@/providers/ReactHookForm";
import { schemaTimekeeping } from "@/react-hook-form/validations/TimeKeeping";
import TimeKeepingForm from "../TimeKeepingForm/TimeKeepingForm";

export default function CheckIn() {
  return (
    <ReactHookForm validateSchema={schemaTimekeeping}>
      <TimeKeepingForm />
      <GetLocationFC />
    </ReactHookForm>
  );
}
