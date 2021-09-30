interface ITrack {
  active: boolean;
  name: string;
  time: string;
}

export interface ITracks {
  tracks: ITrack[];
}
