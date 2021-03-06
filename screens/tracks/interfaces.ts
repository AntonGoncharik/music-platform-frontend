interface ITrack {
  id: string;
  path: string;
  active: boolean;
  name: string;
  time: string;
}

export interface ITracks {
  tracks: ITrack[];
  userTracks?: ITrack[];
  playTrack: (path: string, name: string, id: string) => void;
  pauseTrack: (path: string) => void;
  changeTab: (tab: string) => void;
  page: number;
  hasMoreTracks: boolean;
  getMoreTracks: () => void;
  addTrackToUser: (id: string) => void;
  downloadTrack: (path: string, name: string) => void;
  loading: boolean;
  activeTab: string;
  loadingDownloadAndAdd: boolean;
  visibleModalCreateTrack: boolean;
  setVisibleModalCreateTrack: (isVisible: boolean) => void;
  callbackUploadTracks: (files: any) => void;
  uploadTracks: () => void;
}
