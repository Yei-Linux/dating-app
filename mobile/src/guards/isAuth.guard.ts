import {TNavigation} from '../helpers';

export const isAuthGuard =
  (isLoggedIn: boolean) => async (navigation: TNavigation) => {
    return new Promise(resolve => {
      setTimeout(() => {
        if (!isLoggedIn) {
          (navigation as any).navigate('SignIn');
          resolve(false);
          return;
        }

        resolve(true);
      }, 3000);
    });
  };
