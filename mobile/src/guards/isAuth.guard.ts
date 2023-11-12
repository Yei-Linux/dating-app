import {TNavigation} from '../helpers';

export const isAuthGuard = async (navigation: TNavigation) => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(navigation);
      // navigation.navigate("/accounts/login");
      resolve(true);
    }, 3000);
  });
};
