import {axiosClient} from '../../config';
import {IDiscoverInteractionRequest} from '../../types/interaction.type';

export const interactionPeople = async (
  request: IDiscoverInteractionRequest,
) => {
  try {
    const {data} = await axiosClient.post('/discover', request);

    return data;
  } catch (error) {
    throw new Error('Error when is trying interact with people');
  }
};
