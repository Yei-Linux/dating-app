import prisma from '../src/config/db/setup';
import {
  gendersSeeder,
  countriesSeeder,
  usersSeeder,
  interactionSeeder,
  chatTypeSeeder,
  chatSeeder,
  privateChatSeeder,
  messagesSeeder,
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

  await prisma.$transaction(
    chatTypeSeeder.map((chatType) =>
      prisma.chatType.upsert({
        where: { id: chatType.id },
        update: chatType,
        create: chatType,
      })
    )
  );

  await prisma.$transaction(
    chatSeeder.map((chat) =>
      prisma.chat.upsert({
        where: { id_chatTypeId: { id: chat.id, chatTypeId: chat.chatTypeId } },
        update: chat,
        create: chat,
      })
    )
  );

  await prisma.$transaction(
    privateChatSeeder.map((privateChat) =>
      prisma.privateChat.upsert({
        where: { id: privateChat.id },
        update: privateChat,
        create: privateChat,
      })
    )
  );

  await prisma.$transaction(
    messagesSeeder.map((messages) =>
      prisma.messages.upsert({
        where: { id: messages.id },
        update: messages,
        create: messages,
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
