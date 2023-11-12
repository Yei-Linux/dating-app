import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {useAppSelector} from '../store/global';

export const useAuthStorage = () => {
  const [isAuth, setIsAuth] = useState(false);
  const signIn = useAppSelector(
    state => state.datingMatchApi.mutations.signIn?.data,
  );
  const getStorageData = async () => {
    try {
      const storage = await AsyncStorage.getItem('persist:root');
      if (!storage) {
        return;
      }
      const data = JSON.parse(JSON.parse(storage).datingMatchApi).mutations
        .signIn.data;
      return data;
    } catch (e) {
      return null;
    }
  };

  const handleAuth = async () => {
    const data = await getStorageData();
    setIsAuth(!!data);
  };

  useEffect(() => {
    handleAuth();
  }, []);

  useEffect(() => {
    if (!signIn) {
      return;
    }
    setIsAuth(true);
  }, [signIn]);

  return {isAuth};
};
