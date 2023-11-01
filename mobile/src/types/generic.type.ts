import {NavigationProp, RouteProp} from '@react-navigation/native';

export type TResponse<T> = {
  data: T;
  message: string;
};

type ScreenRouteProp = RouteProp<any, any>;
type ScreenNavigationProp = NavigationProp<any, any>;
export type TScreenProp = {
  navigation: ScreenNavigationProp;
  route: ScreenRouteProp;
};
