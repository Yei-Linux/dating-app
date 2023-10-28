-- CreateTable
CREATE TABLE "ChatType" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ChatType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chat" (
    "id" SERIAL NOT NULL,
    "chatTypeId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Chat_pkey" PRIMARY KEY ("id","chatTypeId")
);

-- CreateTable
CREATE TABLE "PrivateChat" (
    "id" SERIAL NOT NULL,
    "firstUserId" INTEGER NOT NULL,
    "secondUserId" INTEGER NOT NULL,
    "chatId" INTEGER NOT NULL,
    "chatChatTypeId" INTEGER NOT NULL,

    CONSTRAINT "PrivateChat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GroupChat" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "chatId" INTEGER NOT NULL,
    "chatChatTypeId" INTEGER NOT NULL,

    CONSTRAINT "GroupChat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GroupChatUsers" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "groupChatId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GroupChatUsers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Messages" (
    "id" SERIAL NOT NULL,
    "senderId" INTEGER NOT NULL,
    "chatId" INTEGER NOT NULL,
    "chatChatTypeId" INTEGER NOT NULL,
    "message" TEXT NOT NULL,
    "checked" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Messages_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PrivateChat_chatId_chatChatTypeId_key" ON "PrivateChat"("chatId", "chatChatTypeId");

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_chatTypeId_fkey" FOREIGN KEY ("chatTypeId") REFERENCES "ChatType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrivateChat" ADD CONSTRAINT "PrivateChat_firstUserId_fkey" FOREIGN KEY ("firstUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrivateChat" ADD CONSTRAINT "PrivateChat_secondUserId_fkey" FOREIGN KEY ("secondUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrivateChat" ADD CONSTRAINT "PrivateChat_chatId_chatChatTypeId_fkey" FOREIGN KEY ("chatId", "chatChatTypeId") REFERENCES "Chat"("id", "chatTypeId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupChat" ADD CONSTRAINT "GroupChat_chatId_chatChatTypeId_fkey" FOREIGN KEY ("chatId", "chatChatTypeId") REFERENCES "Chat"("id", "chatTypeId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupChatUsers" ADD CONSTRAINT "GroupChatUsers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupChatUsers" ADD CONSTRAINT "GroupChatUsers_groupChatId_fkey" FOREIGN KEY ("groupChatId") REFERENCES "GroupChat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Messages" ADD CONSTRAINT "Messages_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Messages" ADD CONSTRAINT "Messages_chatId_chatChatTypeId_fkey" FOREIGN KEY ("chatId", "chatChatTypeId") REFERENCES "Chat"("id", "chatTypeId") ON DELETE RESTRICT ON UPDATE CASCADE;
