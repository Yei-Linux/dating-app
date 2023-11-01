import {useState, useEffect} from 'react';
import {IUser} from '../modules/Discover';

export interface IUseUserDiscover {
  peopleToDiscover: IUser[];
  refetch: () => void;
}
export const useUsersDiscover = ({
  peopleToDiscover,
  refetch,
}: IUseUserDiscover) => {
  const [users, setUsers] = useState<IUser[]>([]);

  const handleFetchNewPeopleWhenIsFullySwiped = () => {
    refetch();
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
