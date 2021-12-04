import { EmployeeProps } from "@/models/Employee/EmployeeProps";
import { EMPLOYEE_LABELS } from "@/redux/actionLabels";

export function updateSuccessStatus(payload: { success: boolean }) {
  return {
    type: EMPLOYEE_LABELS.SUCCESS_MESS,
    payload,
  };
}

export function updateModalStatus(payload: { visibleAdd: boolean, visibleDelete: boolean }) {
  return {
    type: EMPLOYEE_LABELS.MODAL_STATUS,
    payload,
  };
}

export function setEmployee(payload: { employee: EmployeeProps | null }) {
  return {
    type: EMPLOYEE_LABELS.LIST_EMPLOYEE,
    payload,
  };
}
