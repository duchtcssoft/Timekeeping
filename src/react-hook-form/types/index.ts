export type TAllFormValues = {
  SignIn: {
    username: string;
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
};
