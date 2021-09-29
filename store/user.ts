import { makeAutoObservable } from 'mobx';

import { AuthService, UsersService } from '../services';
import { IAuth } from '../interfaces';

export class UserStore {
  isAuth: boolean = true;
  activeItemNavbar: string = 'tracks';
  token: boolean = false;

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
    globalThis.localStorage.removeItem('token');
    globalThis.localStorage.removeItem('refreshToken');

    this.isAuth = false;
  }

  async autosignin(callbackOk: () => void, callbackError: () => void) {
    try {
      const result = await UsersService.getUserByToken();

      if (result.length) {
        this.isAuth = true;

        callbackOk();
      }
    } catch (error) {
      callbackError();
    }
  }

  setActiveItemNavbar(activeItemNavbar: string) {
    this.activeItemNavbar = activeItemNavbar;
  }

  setToken() {
    this.token = true;
  }
}
