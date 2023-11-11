import prisma from '../../../config/db/setup';

export const findAllCountriesService = async () => {
  const resultSet = await prisma.country.findMany();

  const countries = resultSet.map(({ id, name }) => ({ id, name }));
  return countries;
};
