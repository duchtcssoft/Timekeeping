import { TimeKeepingProps } from "@/models/TimeKeeping/TimeKeepingProps";
import { TIME_KEEPING_LABELS } from "@/redux/actionLabels";

type TREDUCER = {
  timeKeeping: TimeKeepingProps | null;
  timeKeepingList: TimeKeepingProps[];
};

const initialState: Expand<TREDUCER> = {
  timeKeeping: null,
  timeKeepingList: [],
};

export function timeKeepingReducer(
  state = initialState,
  { type, payload }: { type: string; payload: any },
): TREDUCER {
  console.log("payload: ", payload);
  switch (type) {
    case TIME_KEEPING_LABELS.LIST_TIME_KEEPING: {
      return {
        ...state,
        timeKeepingList: payload,
      };
    }
    default: {
      return state;
    }
  }
}
