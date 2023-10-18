import prisma from '../../../config/db/setup';

export const findUsersToDiscover = async () => {
  const users = await prisma.user.findMany();
  return users.map(({ id: userId, age, description, name, lastName }) => ({
    userId,
    age,
    description,
    name,
    lastName,
  }));
};
