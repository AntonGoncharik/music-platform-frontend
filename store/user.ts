import { makeAutoObservable } from 'mobx';
import { enableStaticRendering } from 'mobx-react-lite';

enableStaticRendering(typeof window === 'undefined');

export class UserStore {
  isAuth: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  signin() {
    this.isAuth = true;
  }

  hydrate = (data: any) => {
    if (!data) return;

    this.isAuth = data.isAuth;
  };
}
