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
  const [rba, setRba] = useState(false);

  useEffect(() => {
    let isMounted = true;
    applyGuards(guards, navigation)
      .then(value => {
        if (isMounted) {
          setRba(value);
        }
      })
      .catch(_ => {
        if (isMounted) {
          setRba(false);
          if (navigation.canGoBack()) {
            navigation.goBack();
          }
        }
      });
    return () => {
      isMounted = false;
    };
  }, []);

  return <>{rba === false ? <Loading /> : component({navigation})}</>;
};
