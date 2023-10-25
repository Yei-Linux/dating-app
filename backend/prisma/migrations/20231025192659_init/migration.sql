-- AlterTable
ALTER TABLE "User" ADD COLUMN     "genderToMatchId" INTEGER;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_genderToMatchId_fkey" FOREIGN KEY ("genderToMatchId") REFERENCES "Gender"("id") ON DELETE SET NULL ON UPDATE CASCADE;
