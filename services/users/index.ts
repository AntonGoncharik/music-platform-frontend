import { apiGet, apiPatch } from '../api';
import { IUser } from '../../interfaces';

export class UsersService {
  static async getUserByToken(params: {
    headers: {
      Authorization: string;
    };
  }): Promise<IUser[]> {
    try {
      const result = await apiGet('users', params);
      return result.data;
    } catch (error) {
      throw error;
    }
  }

  static async updateUser(body: any, params?: any): Promise<IUser[]> {
    try {
      const token = globalThis.localStorage.getItem('token');
      const result = await apiPatch('users', body, {
        headers: {
          ...params?.headers,
          Authorization: `jwt ${token}`,
        },
      });
      return result.data;
    } catch (error) {
      throw error;
    }
  }
}
