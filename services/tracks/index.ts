import { apiGet } from '../api';

export class TrackService {
  static async getTracks() {
    try {
      const result = await apiGet('/tracks');
      return result.data;
    } catch (error) {
      throw error;
    }
  }
}
