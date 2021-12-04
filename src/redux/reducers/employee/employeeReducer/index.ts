import { EmployeeProps } from "@/models/Employee/EmployeeProps";
import { EMPLOYEE_LABELS } from "@/redux/actionLabels";

type TREDUCER = {
  employee: EmployeeProps | null;
  employeeList: EmployeeProps[]
};

const initialState: Expand<TREDUCER> = {
  employee: null,
  employeeList: [],
};

export function employeeReducer(
  state = initialState,
  { type, payload }: { type: string; payload: TREDUCER },
) {
  switch (type) {
    case EMPLOYEE_LABELS.LIST_EMPLOYEE: {
      return {
        ...state,
        ...payload,
      };
    }
    default: {
      return state;
    }
  }
}
