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

  static async addTrack(id: string) {}

  static async downloadTrack(path: string, params: {} = {}) {
    try {
      const result = await apiGet(path, params);
      return result.data;
    } catch (error) {
      throw error;
    }
  }
}
