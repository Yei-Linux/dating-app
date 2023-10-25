import {useState, useEffect} from 'react';

export interface IUseUserDiscover {
  data: any[];
}
export const useUsersDiscover = ({data}: IUseUserDiscover) => {
  const [users, setUsers] = useState(data);

  useEffect(() => {
    if (users.length > 0) {
      return;
    }

    setUsers(data);
  }, [users.length, data]);

  return {users, setUsers};
};
