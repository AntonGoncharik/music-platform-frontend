import { apiGet } from '../api';

export class TrackService {
  static async getTracks(params: {} = {}) {
    try {
      const result = await apiGet('tracks', params);
      return result.data;
    } catch (error) {
      throw error;
    }
  }
}
