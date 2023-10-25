-- AlterTable
ALTER TABLE "UserInteractions" ADD COLUMN     "interactionId" INTEGER;

-- CreateTable
CREATE TABLE "Interactions" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Interactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserDiscoverPeopleHistory" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userIdDiscovering" INTEGER,
    "userIdDiscovered" INTEGER,

    CONSTRAINT "UserDiscoverPeopleHistory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserInteractions" ADD CONSTRAINT "UserInteractions_interactionId_fkey" FOREIGN KEY ("interactionId") REFERENCES "Interactions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserDiscoverPeopleHistory" ADD CONSTRAINT "UserDiscoverPeopleHistory_userIdDiscovering_fkey" FOREIGN KEY ("userIdDiscovering") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserDiscoverPeopleHistory" ADD CONSTRAINT "UserDiscoverPeopleHistory_userIdDiscovered_fkey" FOREIGN KEY ("userIdDiscovered") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
