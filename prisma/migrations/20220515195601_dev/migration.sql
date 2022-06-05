/*
  Warnings:

  - The primary key for the `AppointmentDetails` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `ClientDetails` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `ProviderDetails` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[AppointmentUUID]` on the table `AppointmentDetails` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ClientUUID]` on the table `ClientDetails` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ProviderUUID]` on the table `ProviderDetails` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "AppointmentDetails" DROP CONSTRAINT "AppointmentDetails_pkey";

-- AlterTable
ALTER TABLE "ClientDetails" DROP CONSTRAINT "ClientDetails_pkey";

-- AlterTable
ALTER TABLE "Clients" ALTER COLUMN "ModifiedBy" DROP NOT NULL,
ALTER COLUMN "ModifiedOn" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ProviderDetails" DROP CONSTRAINT "ProviderDetails_pkey";

-- AlterTable
ALTER TABLE "Providers" ALTER COLUMN "ModifiedBy" DROP NOT NULL,
ALTER COLUMN "ModifiedOn" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "AppointmentDetails_AppointmentUUID_key" ON "AppointmentDetails"("AppointmentUUID");

-- CreateIndex
CREATE UNIQUE INDEX "ClientDetails_ClientUUID_key" ON "ClientDetails"("ClientUUID");

-- CreateIndex
CREATE UNIQUE INDEX "ProviderDetails_ProviderUUID_key" ON "ProviderDetails"("ProviderUUID");
