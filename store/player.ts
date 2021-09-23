import { makeAutoObservable } from 'mobx';

export class PlayerStore {
  track: string = 'tracks';
  active: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setTrack(track: string) {
    this.track = track;
  }

  playTrack() {
    this.active = true;
  }

  pauseTrack() {
    this.active = false;
  }
}
