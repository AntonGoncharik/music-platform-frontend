import { apiGet } from '../api';
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
}
