import { OfficesProps } from "@/models/Offices/OfficeProps";
import { OFFICE_LABEL } from "@/redux/actionLabels/officesLabel";

export function updateSuccessStatus(payload: { success: boolean }) {
  return {
    type: OFFICE_LABEL.SUCCESS_MESS,
    payload,
  };
}

export function updateModalStatus(payload: { visibleCheckIn: boolean, visibleCheckOut: boolean }) {
  return {
    type: OFFICE_LABEL.MODAL_STATUS,
    payload,
  };
}

export function setOfficeList(payload: { officeList: OfficesProps | null }) {
  return {
    type: OFFICE_LABEL.LIST_OFFICE,
    payload,
  };
}

export function deleteOfficeList(payload: { officeList: OfficesProps | null }) {
  return {
    type: OFFICE_LABEL.LIST_OFFICE,
    payload,
  };
}
