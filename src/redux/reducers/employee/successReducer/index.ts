import { EMPLOYEE_LABELS } from "@/redux/actionLabels";

type TREDUCER = {
  success: boolean;
};

const initialState: Expand<TREDUCER> = {
  success: false,
};

export function successReducer(
  state = initialState,
  { type, payload }: { type: string; payload: TREDUCER },
) {
  switch (type) {
    case EMPLOYEE_LABELS.SUCCESS_MESS: {
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
