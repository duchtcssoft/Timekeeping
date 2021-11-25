import { EXAMPLE_LABELS } from "@/redux/actionLabels";

type TREDUCER = {
  magicNumber: 1;
};

const initialState: Expand<TREDUCER> = {
  magicNumber: 1,
};

export function exampleReducer(
  state = initialState,
  { type, payload }: { type: string; payload: TREDUCER },
) {
  switch (type) {
    case EXAMPLE_LABELS.EXAMPLE: {
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
