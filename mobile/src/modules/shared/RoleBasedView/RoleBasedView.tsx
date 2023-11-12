import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {Loading} from '../Loading';
import {TGuards, applyGuards} from '../../../helpers';

export interface IRoleBasedView {
  component: any;
  guards: TGuards;
}

export const RoleBasedView = function ({component, guards}: IRoleBasedView) {
  const navigation = useNavigation();
  const [canAccessScreen, setCanAccessScreen] = useState(false);

  useEffect(() => {
    let isMounted = true;
    applyGuards(guards, navigation)
      .then(value => {
        if (isMounted) {
          setCanAccessScreen(value);
        }
      })
      .catch(_ => {
        if (isMounted) {
          setCanAccessScreen(false);
          if (navigation.canGoBack()) {
            navigation.goBack();
          }
        }
      });
    return () => {
      isMounted = false;
    };
  }, []);

  return <>{!canAccessScreen ? <Loading /> : component({navigation})}</>;
};
