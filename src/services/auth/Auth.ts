import type { AxiosError } from "axios";
import http from "../http";
import type { LoginErrorResponse, UserRegister, UserType } from "../../type";

export const userRegister = async (body: UserRegister) => {
  try {
    const response = await http.post("api/register", body);
    if (response.status == 200) {
      return {
        data: response.data,
        error: null,
      };
    } else {
      return {
        data: null,
        error: true,
      };
    }
  } catch (error) {
    const err = error as AxiosError<LoginErrorResponse>;
    return {
      data: err.response?.data ?? "Something went wrong",
    };
  }
};
export const loginUser = async (body: UserType) => {
  try {
    const response = await http.post("api/login", body);
    if (response.status == 200) {
      return {
        data: response.data,
        error: null,
      };
    } else {
      return {
        data: null,
        error: true,
      };
    }
  } catch (error) {
    const err = error as AxiosError<LoginErrorResponse>;
    return {
      data: err.response?.data ?? "Something went wrong",
    };
  }
};

export const logoutUser = async () => {
  try {
    const response = await http.get("api/logout");
    if (response.status == 200) {
      return {
        data: response.data,
        error: null,
      };
    } else {
      return {
        data: null,
        error: true,
      };
    }
  } catch (error) {
    const err = error as AxiosError<LoginErrorResponse>;
    return {
      data: err.response?.data ?? "Something went wrong",
    };
  }
};
