/*
  Warnings:

  - Changed the type of `type` on the `Account` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "accountType" AS ENUM ('BANK', 'CASH', 'FIXED', 'INVESTMENT', 'OTHER');

-- AlterTable
ALTER TABLE "Account" DROP COLUMN "type",
ADD COLUMN     "type" "accountType" NOT NULL;
