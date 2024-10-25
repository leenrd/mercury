/*
  Warnings:

  - The values [OTHER] on the enum `accountType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "accountType_new" AS ENUM ('BANK', 'CASH', 'FIXED', 'INVESTMENT', 'CREDIT');
ALTER TABLE "Account" ALTER COLUMN "type" TYPE "accountType_new" USING ("type"::text::"accountType_new");
ALTER TYPE "accountType" RENAME TO "accountType_old";
ALTER TYPE "accountType_new" RENAME TO "accountType";
DROP TYPE "accountType_old";
COMMIT;
