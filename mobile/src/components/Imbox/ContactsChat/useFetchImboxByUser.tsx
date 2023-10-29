import {useQuery} from '@tanstack/react-query';
import {findImboxByUser} from '../../../services/imbox';
import {IFindImboxByUserResponse} from '../../../types/imbox.type';

export const useFetchImboxByUser = () => {
  const {data, isLoading} = useQuery<IFindImboxByUserResponse>({
    queryKey: ['imbox_byuser'],
    queryFn: async () => {
      return await findImboxByUser('1');
    },
  });

  return {data, isLoading};
};
