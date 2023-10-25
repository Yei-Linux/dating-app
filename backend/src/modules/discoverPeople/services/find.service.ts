import prisma from '../../../config/db/setup';

/**
 * Discover random people base in gender likes by userId
 *
 * Possible nice implementation
 * https://github.com/prisma/prisma/issues/5894
 * @param userId
 * @returns
 */
export const findUsersToDiscover = async (userId: number) => {
  const userIsDiscovering = await prisma.user.findFirst({
    where: { id: userId },
  });
  if (!userIsDiscovering) throw new Error('User was not found');
  const genderToMatchToDiscover = userIsDiscovering.genderToMatchId;
  if (!genderToMatchToDiscover) throw new Error('User Gender was not found');

  const takeItemsByQuery = 15;
  const itemCount = await prisma.user.count();
  const randomSkip = Math.max(
    0,
    Math.floor(Math.random() * itemCount) - takeItemsByQuery
  );

  const users = await prisma.user.findMany({
    where: { genderId: genderToMatchToDiscover },
    take: takeItemsByQuery,
    skip: randomSkip,
    include: {
      UserDiscoveringPeopleHistory: {
        where: { id: userIsDiscovering.id },
      },
    },
  });
  return users.map(({ id, age, description, name, lastName, profileImg }) => ({
    id,
    age,
    description,
    name,
    lastName,
    profileImg,
  }));
};
