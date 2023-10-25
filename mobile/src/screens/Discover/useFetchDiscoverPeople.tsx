import {useQuery} from '@tanstack/react-query';
import {fetchDiscoverPeople} from '../../services';

export const useFetchDiscoverPeople = () => {
  const {data, isLoading} = useQuery({
    queryKey: ['discover_people'],
    queryFn: async () => {
      return await fetchDiscoverPeople();
    },
  });

  return {data, isLoading};
};
