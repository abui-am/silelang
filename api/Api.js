import axios from "axios";
import { host, port, baseApi } from "./../env";

const getApi = (api) =>
  axios.create({
    baseURL: baseApi,
    timeout: 30000,
    withCredentials: false,
    transformRequest: [(data) => JSON.stringify(data)],
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });

const getApiUpload = (form) =>
  axios.create({
    baseURL: baseApi,
    timeout: 30000,
    headers: {
      "content-type": "multipart/form-data", // do not forget this
    },
  });

const getApiInServer = (token) =>
  axios.create({
    baseURL: baseUrl,
    timeout: 30000,
    transformRequest: [(data) => JSON.stringify(data)],
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
  });

const getApiLoginUser = (token) =>
  axios.create({
    baseURL: baseUrl,
    timeout: 30000,
    withCredentials: true,
    transformRequest: [(data) => JSON.stringify(data)],
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
  });

const getApiLogin = () =>
  axios.create({
    baseURL: baseUrl,
    timeout: 30000,
    withCredentials: true,
    transformRequest: [(data) => JSON.stringify(data)],
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });

export { getApi, getApiUpload, getApiLogin, getApiLoginUser, getApiInServer };
