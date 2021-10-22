import { makeAutoObservable } from 'mobx';

export class PlayerStore {
  track: string = '';
  trackName: string = '';
  active: boolean = false;
  currentTime: number = 0;
  currentTimeTrack: number = 0;
  duration: number = 0;
  volume: number = 100;

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

  setCurrentTime(currentTime: number) {
    this.currentTime = currentTime;
  }

  setCurrentTimeTrack(currentTimeTrack: number) {
    this.currentTimeTrack = currentTimeTrack;
  }

  setDuration(duration: number) {
    this.duration = duration;
  }

  setVolume(volume: number) {
    this.volume = volume;
  }
}
