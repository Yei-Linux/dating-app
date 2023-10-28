import prisma from '../../../config/db/setup';

export interface IFindImboxUserService {
  userId: number;
}
export const findImboxByUserService = async ({
  userId,
}: IFindImboxUserService) => {
  const privateChat = await prisma.privateChat.findMany({
    where: {
      OR: [
        {
          firstUserId: userId,
        },
        { secondUserId: userId },
      ],
    },
    include: {
      firstUser: {
        select: {
          id: true,
          email: true,
          name: true,
          lastName: true,
          profileImg: true,
        },
      },
      secondUser: {
        select: {
          id: true,
          email: true,
          name: true,
          lastName: true,
          profileImg: true,
        },
      },
      chatWithType: {
        include: {
          Messages: {
            take: 1,
            orderBy: {
              createdAt: 'desc',
            },
            select: {
              id: true,
              senderId: true,
              message: true,
              createdAt: true,
            },
          },
        },
      },
    },
  });

  return privateChat.map(
    ({ chatWithType: { Messages }, id, firstUser, secondUser }) => {
      const userFriend = firstUser.id === userId ? secondUser : firstUser;
      const message = Messages?.[0];

      return {
        id,
        friend: {
          id: userFriend.id,
          email: userFriend.email,
          name: userFriend.name,
          lastName: userFriend.lastName,
          profileImg: userFriend.profileImg,
        },
        lastMessage: message
          ? {
              id: message.id,
              isMine: message.senderId === userId,
              message: message.message,
              createdAt: message.createdAt,
            }
          : null,
      };
    }
  );
};
