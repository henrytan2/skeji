/*
  Warnings:

  - A unique constraint covering the columns `[ProviderUUID,Key]` on the table `ProviderDetails` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "ProviderDetails_Key_key";

-- DropIndex
DROP INDEX "ProviderDetails_ProviderUUID_key";

-- CreateIndex
CREATE UNIQUE INDEX "providerDetails_UK" ON "ProviderDetails"("ProviderUUID", "Key");
