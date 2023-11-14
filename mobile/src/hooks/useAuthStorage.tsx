import {useState, useEffect} from 'react';

import {useAppSelector} from '../store/global';

export const useAuthStorage = () => {
  const [isAuth, setIsAuth] = useState(false);
  const auth = useAppSelector(state => (state.auth as any).token);

  useEffect(() => {
    if (!auth) {
      setIsAuth(false);
      return;
    }
    setIsAuth(true);
  }, [auth]);

  return {isAuth};
};
