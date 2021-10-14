import { makeAutoObservable } from 'mobx';

export class PlayerStore {
  track: string = '';
  trackName: string = '';
  active: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setTrack(track: string, trackName: string) {
    this.track = track;
    this.trackName = trackName;
  }

  playTrack() {
    this.active = true;
  }

  pauseTrack() {
    this.active = false;
  }
}
