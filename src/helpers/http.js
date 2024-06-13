import axios from "axios";

const http = (token, fallback) => {
  const headers = {};
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  const instance = axios.create({
    headers,
    baseURL: "http://localhost:8888" || import.meta.env.BACKEND_URL,
  });

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (err) => {
      if (err.response.status === 401) {
        return Promise.reject(fallback(err.response.data.message));
      }
    }
  );

  return instance;
};
export default http;
