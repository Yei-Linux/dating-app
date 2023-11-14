import {TNavigation} from '../helpers';

export const isAuthGuardForSignActions =
  (isLoggedIn: boolean) => async (navigation: TNavigation) => {
    return new Promise(resolve => {
      setTimeout(() => {
        if (isLoggedIn) {
          (navigation as any).navigate('Home');
          resolve(false);
          return;
        }

        resolve(true);
      }, 100);
    });
  };
