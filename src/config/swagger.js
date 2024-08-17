import axios from "axios";

export const swagger = axios.create({
  baseURL: "https://connections-api.goit.global/",
});
