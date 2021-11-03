import { apiGet, apiPost } from '../api';

export class TrackService {
  static async getTracks(params: {} = {}) {
    try {
      const result = await apiGet('tracks', params);
      return result.data;
    } catch (error) {
      throw error;
    }
  }

  static async addTrackToUser(body: { userId: string; id: string }) {
    try {
      const token = globalThis.localStorage.getItem('token');
      const result = await apiPost('tracks/add', body, {
        headers: {
          Authorization: `jwt ${token}`,
        },
      });
      return result.data;
    } catch (error) {
      throw error;
    }
  }

  static async downloadTrack(path: string, params: {} = {}) {
    try {
      const result = await apiGet(path, params);
      return result.data;
    } catch (error) {
      throw error;
    }
  }

  static async uploadTracks(body: any, params?: any) {
    try {
      const token = globalThis.localStorage.getItem('token');
      const result = await apiPost('tracks', body, {
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
