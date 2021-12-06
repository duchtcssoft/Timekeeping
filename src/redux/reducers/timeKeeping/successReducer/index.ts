import { TIME_KEEPING_LABELS } from "@/redux/actionLabels";

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
    case TIME_KEEPING_LABELS.SUCCESS_MESS: {
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
