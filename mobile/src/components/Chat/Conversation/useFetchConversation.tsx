import {useQuery} from '@tanstack/react-query';
import {findChatByIdService} from '../../../services';
import {TFindChatById} from '../../../types/chat.type';

export const useFetchConversation = () => {
  const {data, isLoading} = useQuery<TFindChatById>({
    queryKey: ['private_chat'],
    queryFn: async () => {
      return await findChatByIdService({chatId: 1, userId: 1});
    },
  });

  return {data, isLoading};
};
