import { makeAutoObservable } from 'mobx';

export class UserStore {
  isAuth: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  signin() {
    this.isAuth = true;
  }
}
