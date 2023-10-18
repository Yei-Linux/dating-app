import prisma from '../src/config/db/setup';
import { gendersSeeder, countriesSeeder, usersSeeder } from '../src/config/db';

async function run() {
  await prisma.gender.createMany({
    data: gendersSeeder,
  });
  await prisma.country.createMany({
    data: countriesSeeder,
  });
  await prisma.user.createMany({
    data: usersSeeder,
  });
}

run()
  .catch((e) => {
    console.log(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
