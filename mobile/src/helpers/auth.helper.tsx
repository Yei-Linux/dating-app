import AsyncStorage from '@react-native-async-storage/async-storage';

export const getAuthStorage = async () => {
  try {
    const authStorage = await AsyncStorage.getItem('persist:auth');
    if (!authStorage) {
      return null;
    }
    const data = JSON.parse(authStorage);
    return data;
  } catch (e) {
    return null;
  }
};
