import { makeAutoObservable } from 'mobx';

import { AuthService, UsersService } from '../services';
import { IAuth } from '../interfaces';

export class UserStore {
  activeItemNavbar: string = 'tracks';
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  avatarPath: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  async signin(body: IAuth, callbackOk: () => void, callbackError: (error: any) => void) {
    try {
      const result = await AuthService.signin(body);

      this.firstName = result.user.firstName;
      this.lastName = result.user.lastName;
      this.email = result.user.email;
      this.avatarPath = result.user.avatarPath;

      AuthService.setTokens(result.tokens.token, result.tokens.refreshToken);
      AuthService.setCookie(result.tokens.token);

      callbackOk();
    } catch (error) {
      callbackError(error);
    }
  }

  async autosignin(callbackOk: () => void, callbackError: () => void) {
    try {
      const token = globalThis.localStorage.getItem('token');

      if (token) {
        const result = await UsersService.getUserByToken({
          headers: {
            Authorization: `jwt ${token}`,
          },
        });

        if (result.length) {
          this.firstName = result[0].firstName as string;
          this.lastName = result[0].lastName as string;
          this.email = result[0].email as string;
          this.avatarPath = result[0].avatarPath as string;

          callbackOk();
        }
      } else {
        callbackError();
      }
    } catch (error) {
      throw error;
    }
  }

  async signup(body: IAuth, callbackOk: () => void, callbackError: () => void) {
    try {
      const result = await AuthService.signup(body);

      AuthService.setTokens(result.tokens.token, result.tokens.refreshToken);
      AuthService.setCookie(result.tokens.token);

      callbackOk();
    } catch (error) {
      callbackError();
    }
  }

  setActiveItemNavbar(activeItemNavbar: string) {
    this.activeItemNavbar = activeItemNavbar;
  }
}
