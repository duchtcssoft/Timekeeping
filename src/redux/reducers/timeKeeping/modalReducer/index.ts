import { TIME_KEEPING_LABELS } from "@/redux/actionLabels";

type TREDUCER = {
  visibleCheckIn: boolean;
  visibleCheckOut: boolean;
};

const initialState: Expand<TREDUCER> = {
  visibleCheckIn: false,
  visibleCheckOut: false,
};

export function modalReducer(
  state = initialState,
  { type, payload }: { type: string; payload: TREDUCER },
) {
  switch (type) {
    case TIME_KEEPING_LABELS.MODAL_STATUS: {
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
