import axios from 'axios';
import Router from 'next/router';

import { BASE_URL } from '../constants';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401 && globalThis.localStorage) {
      Router.replace('/auth');
    }

    throw error.response.data;
  },
);

export const apiPost = (path: string, body: any, params: any = {}) => {
  return axiosInstance.post(path, JSON.stringify(body), params);
};

export const apiGet = (path: string, params?: any) => {
  return axiosInstance.get(path, params);
};

export const apiPatch = (path: string, body: any, params: any = {}) => {
  if (params?.headers?.contentType) {
    return axiosInstance.patch(path, body, params);
  }

  return axiosInstance.patch(path, JSON.stringify(body), params);
};

export const apiDelete = (path: string, data: any) => {
  return axiosInstance.delete(path, { data });
};
