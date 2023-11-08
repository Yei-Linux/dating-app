import prisma from '../../../config/db/setup';

export interface IFindByUserIdService {
  userId: number;
}

export const findByUserIdService = async ({ userId }: IFindByUserIdService) => {
  const userFound = await prisma.user.findFirst({
    where: { id: userId },
  });

  if (!userFound) throw new Error('User was not found');

  return {
    id: userFound.id,
    email: userFound.email,
    name: userFound.name,
    lastName: userFound.lastName,
    age: userFound.age,
    profileImg: userFound.profileImg,
  };
};
