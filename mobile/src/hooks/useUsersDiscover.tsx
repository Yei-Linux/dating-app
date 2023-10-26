import {useState, useEffect} from 'react';
import {IUser} from '../components/Discover/LikeOrNot/LikeOrNot';
import {useRQCache} from './useRQCache';
import {fetchDiscoverPeople} from '../services';

export interface IUseUserDiscover {
  peopleToDiscover: IUser[];
}
export const useUsersDiscover = ({peopleToDiscover}: IUseUserDiscover) => {
  const {setToQRCache} = useRQCache();
  const [users, setUsers] = useState<IUser[]>([]);

  const handleFetchNewPeopleWhenIsFullySwiped = async () => {
    try {
      const newPeople = await fetchDiscoverPeople();
      setToQRCache(['discover_people'], () => newPeople);
    } catch (error) {
      setToQRCache(['discover_people'], () => []);
    }
  };

  useEffect(() => {
    if (users.length > 0) {
      return;
    }

    handleFetchNewPeopleWhenIsFullySwiped();
  }, [users.length]);

  useEffect(() => {
    setUsers(peopleToDiscover);
  }, [peopleToDiscover]);

  return {users, setUsers};
};
