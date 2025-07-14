export interface UserRegister {
  name: string;
  email: string;
  password: string | number;
}

export interface UserType {
  email: string;
  password: string | number;
}

export interface LoginErrorResponse {
  message: string;
  status: number;
}
