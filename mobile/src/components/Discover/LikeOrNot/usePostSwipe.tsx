import {useMutation} from '@tanstack/react-query';
import {interactionPeople} from '../../../services';
import {IDiscoverInteractionRequest} from '../../../types/interaction.type';

export const usePostInteraction = () => {
  const {mutate} = useMutation({
    mutationKey: ['interaction_user'],
    mutationFn: async (req: IDiscoverInteractionRequest) => {
      return await interactionPeople(req);
    },
  });

  return {mutate};
};
