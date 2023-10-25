import prisma from '../src/config/db/setup';
import {
  gendersSeeder,
  countriesSeeder,
  usersSeeder,
  interactionSeeder,
} from '../src/config/db';

async function run() {
  await prisma.$transaction(
    gendersSeeder.map((gender) =>
      prisma.gender.upsert({
        where: { id: gender.id },
        update: gender,
        create: gender,
      })
    )
  );

  await prisma.$transaction(
    countriesSeeder.map((country) =>
      prisma.country.upsert({
        where: { id: country.id },
        update: country,
        create: country,
      })
    )
  );

  await prisma.$transaction(
    interactionSeeder.map((interaction) =>
      prisma.interactions.upsert({
        where: { id: interaction.id },
        update: interaction,
        create: interaction,
      })
    )
  );

  await prisma.$transaction(
    usersSeeder.map((user) =>
      prisma.user.upsert({
        where: { id: user.id },
        update: user,
        create: user,
      })
    )
  );
}

run()
  .catch((e) => {
    console.log(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
