import { apiGet } from '../api';
import { IAuth, IUser } from '../../interfaces';

export class UsersService {
  static async getUserByToken(): Promise<IUser[]> {
    try {
      const result = await apiGet('users');
      return result.data;
    } catch (error) {
      throw error;
    }
  }
}
