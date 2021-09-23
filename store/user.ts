import { makeAutoObservable } from 'mobx';

export class UserStore {
  isAuth: boolean = false;
  activeItemNavbar: string = 'tracks';

  constructor() {
    makeAutoObservable(this);
  }

  signin() {
    this.isAuth = true;
  }

  logout() {
    this.isAuth = false;
  }

  setActiveItemNavbar(activeItemNavbar: string) {
    this.activeItemNavbar = activeItemNavbar;
  }
}
