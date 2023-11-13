import {useState, useEffect} from 'react';

import {useAppSelector} from '../store/global';

export const useAuthStorage = () => {
  const [isAuth, setIsAuth] = useState(false);
  const auth = useAppSelector(state => state.auth);

  useEffect(() => {
    if (!auth) {
      return;
    }
    setIsAuth(true);
  }, [auth]);

  return {isAuth};
};
