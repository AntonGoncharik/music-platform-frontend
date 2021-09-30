import { makeAutoObservable } from 'mobx';
import cookieCutter from 'cookie-cutter';

import { AuthService, UsersService } from '../services';
import { IAuth } from '../interfaces';

export class UserStore {
  isAuth: boolean = true;
  activeItemNavbar: string = 'tracks';

  constructor() {
    makeAutoObservable(this);
  }

  async signin(body: IAuth, callbackOk: () => void, callbackError: () => void) {
    try {
      const result = await AuthService.signin(body);

      cookieCutter.set('token', result.tokens.token);

      globalThis.localStorage.setItem('token', result.tokens.token);
      globalThis.localStorage.setItem('refreshToken', result.tokens.refreshToken);

      this.isAuth = true;

      callbackOk();
    } catch (error) {
      callbackError();
    }
  }

  async autosignin(callbackOk: () => void, callbackError: () => void) {
    try {
      const token = localStorage.getItem('token');

      const result = await UsersService.getUserByToken({
        headers: {
          Authorization: `jwt ${token}`,
        },
      });

      if (result.length) {
        this.isAuth = true;

        callbackOk();
      } else {
        callbackError();
      }
    } catch (error) {
      callbackError();
    }
  }

  async signup(body: IAuth, callbackOk: () => void, callbackError: () => void) {
    try {
      const result = await AuthService.signup(body);

      cookieCutter.set('token', result.tokens.token);

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

  setActiveItemNavbar(activeItemNavbar: string) {
    this.activeItemNavbar = activeItemNavbar;
  }
}
