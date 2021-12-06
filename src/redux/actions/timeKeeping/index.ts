import { TimeKeepingProps } from "@/models/TimeKeeping/TimeKeepingProps";
import { TIME_KEEPING_LABELS } from "@/redux/actionLabels";

export function updateSuccessStatus(payload: { success: boolean }) {
  return {
    type: TIME_KEEPING_LABELS.SUCCESS_MESS,
    payload,
  };
}

export function updateModalStatus(payload: { visibleCheckIn: boolean, visibleCheckOut: boolean }) {
  return {
    type: TIME_KEEPING_LABELS.MODAL_STATUS,
    payload,
  };
}

export function setTimeKeeping(payload: { timeKeeping: TimeKeepingProps | null }) {
  return {
    type: TIME_KEEPING_LABELS.LIST_TIME_KEEPING,
    payload,
  };
}
