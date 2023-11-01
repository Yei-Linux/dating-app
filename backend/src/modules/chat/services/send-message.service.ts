import prisma from '../../../config/db/setup';

export interface ISendPrivateMessageService {
  senderId: number;
  chatId: number;
  message: string;
}

export const sendPrivateMessageService = async ({
  senderId,
  chatId,
  message,
}: ISendPrivateMessageService) => {
  const messageCreated = await prisma.messages.create({
    data: {
      senderId,
      chatId,
      message,
      chatChatTypeId: 1,
      checked: false,
    },
  });

  return messageCreated;
};
