import { PrismaClient } from '@prisma/client';
import { gendersSeeder, countriesSeeder, usersSeeder } from '../src/config/db';

const prisma = new PrismaClient();

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
