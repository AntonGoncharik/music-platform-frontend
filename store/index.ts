import { enableStaticRendering } from 'mobx-react-lite';

import { UserStore } from './user';

let store: any = null;
const isServer: boolean = typeof window === 'undefined';

enableStaticRendering(isServer);

export function initializeStore() {
  if (isServer) {
    return {
      userStore: new UserStore(),
    };
  }
  if (store === null) {
    store = {
      userStore: new UserStore(),
    };
  }

  return store;
}

export const getStore = () => {
  return store;
};
