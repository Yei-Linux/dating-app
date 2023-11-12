import {NavigationProp} from '@react-navigation/native';

export type TNavigation = NavigationProp<ReactNavigation.RootParamList>;
export type TGuards = Array<(navigation: TNavigation) => Promise<any>>;

export const applyGuards = async (
  guards: TGuards,
  navigation: TNavigation,
): Promise<boolean> => {
  if (guards && Array.isArray(guards) && guards.length > 0) {
    try {
      const results = [];
      for (const guard of guards) {
        results.push(await guard(navigation));
      }
      return results.reduce((a, b) => a && b, true);
    } catch (e) {
      return false;
    }
  } else {
    return true;
  }
};
