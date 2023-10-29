import prisma from '../../../config/db/setup';

export const findPrivateChatByIdService = async (
  chatId: number,
  userId: number
) => {
  const privateChatResultSet = await prisma.privateChat.findFirst({
    where: {
      chatId,
      chatChatTypeId: 1,
    },
    include: {
      firstUser: true,
      secondUser: true,
    },
  });
  if (!privateChatResultSet) throw new Error('Private chat was not found');
  const userFriend =
    privateChatResultSet.firstUserId === userId
      ? privateChatResultSet.secondUser
      : privateChatResultSet.firstUser;

  const messagesResultSet = await prisma.messages.findMany({
    where: {
      chatId,
    },
    include: {
      chat: {
        include: {
          PrivateChat: {
            include: {
              firstUser: true,
              secondUser: true,
            },
          },
        },
      },
    },
  });

  const messages = messagesResultSet.map((message) => {
    return {
      owner:
        message.senderId === userId ? ('mine' as const) : ('yours' as const),
      text: message.message,
      timestamp: new Date(message.createdAt).getTime(),
    };
  });

  return {
    id: chatId,
    friend: {
      id: userFriend.id,
      name: userFriend.name,
      lastName: userFriend.lastName,
      profileImg: userFriend.profileImg,
    },
    messages,
  };
};
