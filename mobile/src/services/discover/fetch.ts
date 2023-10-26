import {IUser} from '../../components/Discover/LikeOrNot/LikeOrNot';
import {axiosClient} from '../../config';

export const fetchDiscoverPeople = async (): Promise<IUser[]> => {
  try {
    const {data} = await axiosClient.get('/discover?userId=1');
    return data?.data;
  } catch (error) {
    throw new Error('Error getting response');
  }
};
