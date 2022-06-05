/*
  Warnings:

  - A unique constraint covering the columns `[ClientUUID,Key]` on the table `ClientDetails` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "ClientDetails_ClientUUID_key";

-- CreateIndex
CREATE UNIQUE INDEX "clientDetails_UK" ON "ClientDetails"("ClientUUID", "Key");
