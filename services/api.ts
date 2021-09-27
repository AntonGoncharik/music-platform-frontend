import axios from 'axios';

import { BASE_URL } from '../constants';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

axiosInstance.interceptors.request.use((config) => {
  const token = globalThis.localStorage.getItem('token');
  // const refreshToken = globalThis.localStorage.getItem('refreshToken');

  config.headers.Authorization = `jwt ${token}`;

  if (config.url && config.url.includes('auth')) {
    delete config.headers.Authorization;
  }

  // if (config.url === '/auth/refresh') {
  //   config.headers.Authorization = `jwt ${token} ${refreshToken}`;
  // }

  return config;
});

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     if (error.response.data.code === 401 && error.response.data.key === 'expired_token') {
//       const refreshToken = globalThis.localStorage.getItem('refreshToken');
//       if (refreshToken) {
//         try {
//           const result = await apiGet('/auth/refresh');

//           globalThis.localStorage.setItem('token', result.data.token);
//           globalThis.localStorage.setItem('refreshToken', result.data.refreshToken);

//           return await axiosInstance(error.config);
//         } catch (err) {
//           UserService.logout();
//         }
//       } else {
//         UserService.logout();
//       }
//     }

//     if (error.response.data.code === 401 && error.response.data.key !== 'expired_token') {
//       UserService.logout();
//     }

//     if (error.response.data.code !== 401) {
//       throw error;
//     }
//   },
// );

export const apiPost = (path: string, body: any, params: any = {}) => {
  return axiosInstance.post(path, JSON.stringify(body), { params });
};

export const apiGet = (path: string, params?: any) => {
  return axiosInstance.get(path, params);
};

export const apiPatch = (path: string, body: any) => {
  return axiosInstance.patch(path, JSON.stringify(body));
};

export const apiDelete = (path: string, data: any) => {
  return axiosInstance.delete(path, { data });
};
