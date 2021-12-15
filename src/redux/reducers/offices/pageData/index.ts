/* eslint-disable @typescript-eslint/comma-dangle */
import { TResponseOffice } from "@/api/requestOffices";
import { API_LABELS } from "@/redux/actionLabels/api";
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
  { type, payload }: { type: string; payload: TREDUCER }
) {
  switch (type) {
    case API_LABELS.GET_OFFICES_LOADING: {
      return {
        ...state,
        ...payload,
        isLoading: true,
        error: undefined,
      };
    }
    case API_LABELS.GET_OFFICES_SUCCESS: {
      return {
        ...state,
        // FIXME:
        listOffice: (payload as any).data,
        isLoading: false,
        error: undefined,
      };
    }
    case API_LABELS.GET_OFFICES_ERROR: {
      return {
        ...state,
        ...payload,
        isLoading: false,
        error: payload.error,
      };
    }

    case API_LABELS.CREATE_OFFICCE_LOADING: {
      return {
        ...state,
        ...payload,
        isLoading: true,
        error: undefined,
      };
    }
    case API_LABELS.CREATE_OFFICCE_SUCCESS: {
      return {
        ...state,
        // FIXME:
        listOffice: [...state.listOffice, (payload as any).data],
        isLoading: false,
        error: undefined,
      };
    }
    case API_LABELS.CREATE_OFFICCE_ERROR: {
      return {
        ...state,
        ...payload,
        isLoading: false,
        error: payload.error,
      };
    }

    case API_LABELS.DELETE_OFFICCE_LOADING: {
      return {
        ...state,
        ...payload,
        isLoading: true,
        error: undefined,
      };
    }
    case API_LABELS.DELETE_OFFICCE_SUCCESS: {
      return {
        ...state,
        listOffice: [...state.listOffice],
        // FIXME:
        isLoading: false,
        error: undefined,
      };
    }
    case API_LABELS.DELETE_OFFICCE_ERROR: {
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
