import apiClient from "../../../services/api-client";
import { loginFormData } from "../validations/login-validation";

export async function loginService(data: loginFormData) {
  try {
    const response = await apiClient.post(`/api/v1/auth/login`, data);
    return response;
  } catch (error) {
    return error;
  }
}
