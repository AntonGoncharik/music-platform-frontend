import cookieCutter from 'cookie-cutter';

import { apiPost, apiGet } from '../api';
import { IAuth } from '../../interfaces';

export class AuthService {
  static async signin(body: IAuth) {
    try {
      const result = await apiPost('auth/signin', body);
      return result.data;
    } catch (error) {
      throw error;
    }
  }

  static async signup(body: IAuth) {
    try {
      const result = await apiPost('auth/signup', body);
      return result.data;
    } catch (error) {
      throw error;
    }
  }

  static async refreshToken(body: any) {
    try {
      const result = await apiGet('auth/refresh', body);
      return result.data;
    } catch (error) {
      throw error;
    }
  }

  static setTokens(token: string, refreshToken: string) {
    globalThis.localStorage.setItem('token', token);
    globalThis.localStorage.setItem('refreshToken', refreshToken);
  }

  static removeTokens() {
    globalThis.localStorage.removeItem('token');
    globalThis.localStorage.removeItem('refreshToken');
  }

  static setCookie(token: string) {
    cookieCutter.set('token', token);
  }

  static removeCookie() {
    cookieCutter.set('token', '');
  }
}
