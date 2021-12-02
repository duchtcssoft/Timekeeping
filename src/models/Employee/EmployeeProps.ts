export interface EmployeeProps {
  id?: number;
  name: string;
  email: string;
  phone: string;
  gender?: string;
  date_of_birth?: any;
  address?: string;
  office?: string;
  password: string;
  passwordConfirmation?: string;
  avatar?: string,
  position?: string,
  type?: number,
}

export interface EmployeeModalProps {
  employee: EmployeeProps | null;
  visible?: boolean;
  setVisible: (visible: boolean) => void;
  setSuccess: (success: boolean) => void;
}
