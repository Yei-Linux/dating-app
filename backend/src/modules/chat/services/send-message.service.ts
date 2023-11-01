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
      chatChatTypeId: 1,
      message,
      checked: true,
    },
  });

  return {
    senderId: messageCreated.senderId,
    text: messageCreated.message,
    timestamp: new Date(messageCreated.createdAt).getTime(),
  };
};
