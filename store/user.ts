import { makeAutoObservable } from 'mobx';

import { AuthService } from '../services';
import { IAuth } from '../interfaces';

export class UserStore {
  isAuth: boolean = false;
  activeItemNavbar: string = 'tracks';

  constructor() {
    makeAutoObservable(this);
  }

  async signin(body: IAuth, callbackOk: () => void, callbackError: () => void) {
    try {
      const result = await AuthService.signin(body);

      globalThis.localStorage.setItem('token', result.tokens.token);
      globalThis.localStorage.setItem('refreshToken', result.tokens.refreshToken);

      this.isAuth = true;

      callbackOk();
    } catch (error) {
      callbackError();
    }
  }

  async signup(body: IAuth, callbackOk: () => void, callbackError: () => void) {
    try {
      const result = await AuthService.signup(body);

      globalThis.localStorage.setItem('token', result.tokens.token);
      globalThis.localStorage.setItem('refreshToken', result.tokens.refreshToken);

      callbackOk();
    } catch (error) {
      callbackError();
    }
  }

  logout() {
    this.isAuth = false;
  }

  setActiveItemNavbar(activeItemNavbar: string) {
    this.activeItemNavbar = activeItemNavbar;
  }
}
