import { apiPost } from '../api';
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
}
