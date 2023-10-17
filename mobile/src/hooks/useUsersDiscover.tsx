import {useState, useEffect} from 'react';
import {USERS_ON_SWIPPING} from '../constants';

export const useUsersDiscover = () => {
  const [users, setUsers] = useState(USERS_ON_SWIPPING);

  useEffect(() => {
    if (users.length > 0) {
      return;
    }

    setUsers(USERS_ON_SWIPPING);
  }, [users.length]);

  return {users, setUsers};
};
