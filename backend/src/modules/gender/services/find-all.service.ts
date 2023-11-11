import prisma from '../../../config/db/setup';

export const findAllGendersService = async () => {
  const resultSet = await prisma.gender.findMany();

  const genders = resultSet.map(({ id, name }) => ({ id, name }));
  return genders;
};
