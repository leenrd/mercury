/*
  Warnings:

  - You are about to drop the column `portfolioId` on the `Asset` table. All the data in the column will be lost.
  - You are about to drop the column `portfolioId` on the `Liability` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Asset` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Liability` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Asset" DROP COLUMN "portfolioId",
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Liability" DROP COLUMN "portfolioId",
ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Asset" ADD CONSTRAINT "Asset_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Liability" ADD CONSTRAINT "Liability_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
