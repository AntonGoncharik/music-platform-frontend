import { enableStaticRendering } from 'mobx-react-lite';

import { UserStore } from './user';
import { PlayerStore } from './player';

let store: any = null;
const isServer: boolean = typeof window === 'undefined';

enableStaticRendering(isServer);

export function initializeStore() {
  if (isServer) {
    return {
      userStore: new UserStore(),
      playerStore: new PlayerStore(),
    };
  }
  if (store === null) {
    store = {
      userStore: new UserStore(),
      playerStore: new PlayerStore(),
    };
  }

  return store;
}

export const getStore = () => {
  return store;
};
