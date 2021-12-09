export type TAllFormValues = {
  SignIn: {
    email: string;
    password: string;
    remember: boolean;
  };
  SignUp: {
    name: string;
    email: string;
    phone: number;
    address: string;
    password: string;
    confirmPassword: string;
    angreement: boolean;
  };
  ForgotPassword: {
    email: string;
  };
  ChangePassword: {
    password: string;
    confirmPassword: string;
  };
  CheckIn: {
    checkin_hour: number;
    checkin_minutes: number;
    office_id: string;
    office_shifts_id: string;
    checkin_note: string;
    longitude: number;
    latitude: number;
  };
  CheckOut: {
    checkout_hour: number;
    checkout_minutes: number;
    office_id: string;
    office_shifts_id: string;
    checkout_note: string;
    longitude: number;
    latitude: number;
  };
};
