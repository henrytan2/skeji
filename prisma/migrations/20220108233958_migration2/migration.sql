/*
  Warnings:

  - You are about to drop the column `Name` on the `Clients` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[Email]` on the table `Clients` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[Email]` on the table `Providers` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `FirstName` to the `Clients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `LastName` to the `Clients` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Clients" DROP COLUMN "Name",
ADD COLUMN     "FirstName" TEXT NOT NULL,
ADD COLUMN     "LastName" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Clients_Email_key" ON "Clients"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "Providers_Email_key" ON "Providers"("Email");
