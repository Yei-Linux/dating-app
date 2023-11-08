import prisma from '../../../config/db/setup';
import { TUpdateByUserIdRequest } from '../dtos';

export type TUpdateByUserIdService = TUpdateByUserIdRequest & {
  userId: number;
};

export const updateByUserIdService = async ({
  userId: id,
  ...req
}: TUpdateByUserIdService) => {
  const newReq = Object.entries(req).reduce((acc, [key, value]) => {
    if (!value) return acc;
    return { ...acc, [key]: value };
  }, {});

  const userUpdated = await prisma.user.update({
    where: { id },
    data: newReq,
  });

  return {
    id: userUpdated.id,
    email: userUpdated.email,
    name: userUpdated.name,
    lastName: userUpdated.lastName,
    age: userUpdated.age,
    profileImg: userUpdated.profileImg,
  };
};
