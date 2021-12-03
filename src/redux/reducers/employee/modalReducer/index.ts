import { EMPLOYEE_LABELS } from "@/redux/actionLabels";

type TREDUCER = {
  visibleAdd: boolean;
  visibleDelete: boolean;
};

const initialState: Expand<TREDUCER> = {
  visibleAdd: false,
  visibleDelete: false,
};

export function modalReducer(
  state = initialState,
  { type, payload }: { type: string; payload: TREDUCER },
) {
  switch (type) {
    case EMPLOYEE_LABELS.MODAL_STATUS: {
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
