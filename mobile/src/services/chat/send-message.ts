import {axiosClient} from '../../config';
import {TSendMessageRequest} from '../../types';

export const sendMessageService = async (request: TSendMessageRequest) => {
  try {
    const {data} = await axiosClient.post('/chat/send', request);
    return data?.data;
  } catch (error) {
    return null;
  }
};
