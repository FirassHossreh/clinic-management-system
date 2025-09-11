import apiClient from "../../../services/api-client";
import { loginFormData } from "../validations/login-validation";

export async function loginService(data: loginFormData) {
  try {
    const response = await apiClient.post(
      `/api/v1/clinic-management-system/login`,
      data
    );
    return response.data;
  } catch (error) {
    return error;
  }
}
