import axios from "axios";

export const swagger = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

export const setToken = token => {
  swagger.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const clearToken = () => {
  swagger.defaults.headers.common.Authorization = ``;
};
