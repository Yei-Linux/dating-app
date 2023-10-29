import {axiosClient} from '../../config';

export interface IFindChatByIdService {
  chatId: number;
  userId: number;
}
export const findChatByIdService = async ({
  chatId,
  userId,
}: IFindChatByIdService) => {
  try {
    const params = new URLSearchParams(
      JSON.parse(
        JSON.stringify({
          chatId,
          userId,
        }),
      ),
    );
    const {data} = await axiosClient.get(`/chat/private?${params.toString()}`);
    return data;
  } catch (error) {
    throw new Error(`Error getting private chat ${(error as Error).message}`);
  }
};
