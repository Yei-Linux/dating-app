import prisma from '../../../config/db/setup';

export interface IFindByUserIdService {
  userId: number;
}

export const findByUserIdService = async ({ userId }: IFindByUserIdService) => {
  const userFound = await prisma.user.findFirst({
    where: { id: userId },
    include: {
      gender: true,
      genderToMatch: true,
      country: true,
    },
  });

  if (!userFound) throw new Error('User was not found');

  return {
    id: userFound.id,
    email: userFound.email,
    name: userFound.name,
    lastName: userFound.lastName,
    age: userFound.age,
    gender: {
      id: userFound.gender?.id ?? 0,
      name: userFound.gender?.name ?? '',
    },
    genderToMatch: {
      id: userFound.genderToMatch?.id ?? 0,
      name: userFound.genderToMatch?.name ?? '',
    },
    country: {
      id: userFound.country?.id ?? 0,
      name: userFound.country?.name ?? '',
    },
    description: userFound.description ?? '',
    profileImg: userFound.profileImg,
  };
};
