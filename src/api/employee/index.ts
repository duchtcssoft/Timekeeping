import { buildXHR } from "@/helpers";
import { THttpMethod } from "@/types";

type ListEmployeeRequest = {
  id?: number;
  name?: string;
  email?: string;
  phone?: string;
  gender?: string;
  date_of_birth?: any;
  address?: string;
  office?: string;
  password?: string;
  passwordConfirmation?: string;
  avatar?: string;
  position?: string;
  type?: number;
};

type ListEmployeeParams = {
  page: number;
};

type ListEmployeeResponse = {
  data: any;
  pagination: any;
  access_token: string;
};

const token = process.env.REACT_APP_TOKEN_API;
export const useListEmployee = buildXHR<
  ListEmployeeRequest,
  ListEmployeeResponse,
  ListEmployeeParams
>({
  url: "/api/employes",
  method: "GET",
  headers: { Authorization: `Bearer ${token}` },
});

export const useAddEmployee = (id: number | undefined = 0) => {
  let url = "/api/employes";
  let method: THttpMethod = "POST";
  if (id !== 0) {
    url = `${url}/${id}`;
    method = "PUT";
  }
  return buildXHR<ListEmployeeRequest, ListEmployeeResponse, ListEmployeeParams>({
    url,
    method,
    headers: { Authorization: `Bearer ${token}` },
  },
  );
};

export const useDeleteEmployee = (id: number | undefined) =>
  buildXHR<ListEmployeeRequest, ListEmployeeResponse, ListEmployeeParams>({
    url: `/api/employes/${id}`,
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
