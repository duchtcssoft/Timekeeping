import { TResponseOffice } from "@/api/requestOffices";
import { API_LABELS, EXAMPLE_LABELS } from "@/redux/actionLabels";
import { AxiosError } from "axios";

type TREDUCER = TResponseOffice & {
  isLoading: boolean;
  error?: AxiosError;
};

const initialState: Expand<TREDUCER> = {
  error: undefined,
  isLoading: false,
  listOffice: [],
};

export function pageDataReducer(
  state = initialState,
  { type, payload }: { type: string; payload: TREDUCER },
) {
  switch (type) {
    case API_LABELS.GET_OFFICE_LOADING: {
      return {
        ...state,
        ...payload,
        isLoading: true,
        error: undefined,
      };
    }
    case API_LABELS.GET_OFFICE_SUCCESS: {
      return {
        ...state,
        // FIXME:
        listOffice: (payload as any).data,
        isLoading: false,
        error: undefined,
      };
    }
    case API_LABELS.GET_OFFICE_ERROR: {
      return {
        ...state,
        ...payload,
        isLoading: false,
        error: payload.error,
      };
    }
    default: {
      return state;
    }
  }
}
