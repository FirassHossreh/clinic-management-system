import axios from "axios";
import { toast } from "react-toastify";
const apiClient = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});
apiClient.interceptors.request.use((config) => {
  return config;
});
apiClient.interceptors.response.use(
  (response) => {
    const status = response.status;
    const type = response.data.type;
    if (!type) {
      if (status === 200) {
        toast.success(response.data.message);
      } else if (status === 201) {
        toast.success(response.data.message);
      } else {
        toast.success(response.data.message);
      }
    }

    return response;
  },
  (error) => {
    if (!error.response) {
      toast.error("you don't have internet");
    } else {
      const type = error.response.data.type;
      if (!type) {
        const status = error.response.status;
        const message = error.response.data.message;
        if (status === 400) {
          toast.error("bad requist");
        } else if (status === 401) {
          toast.error(message);
        } else if (status === 403) {
          toast.error("girme yetikiniz yok");
        } else if (status === 404) {
          toast.error("404");
        } else if (status === 500) {
          toast.error("Sunucu hatası! Lütfen tekrar deneyin.");
        } else if (status === 502) {
          toast.error("Geçici sunucu hatası!");
        } else if (status === 503) {
          toast.error("Sunucu şu anda kullanılamaz.");
        } else if (status === 504) {
          toast.error("Gateway zaman aşımı!");
        } else {
          toast.error(`⚠️ Bilinmeyen hata: ${error.response.data.message}`);
        }
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;
