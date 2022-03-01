-- CreateTable
CREATE TABLE "AppointmentDetails" (
    "AppointmentUUID" TEXT NOT NULL,
    "Key" TEXT NOT NULL,
    "Value" TEXT NOT NULL,

    CONSTRAINT "AppointmentDetails_pkey" PRIMARY KEY ("AppointmentUUID")
);

-- CreateTable
CREATE TABLE "Appointments" (
    "UUID" TEXT NOT NULL,
    "ProviderUUID" TEXT NOT NULL,
    "ClientUUID" TEXT NOT NULL,
    "DateTime" TIMESTAMP(3) NOT NULL,
    "CreatedBy" TEXT NOT NULL,
    "CreatedOn" TIMESTAMP(3) NOT NULL,
    "ModifiedBy" TEXT NOT NULL,
    "ModifiedOn" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Appointments_pkey" PRIMARY KEY ("UUID")
);

-- CreateTable
CREATE TABLE "ClientDetails" (
    "ClientUUID" TEXT NOT NULL,
    "Key" TEXT NOT NULL,
    "Value" TEXT NOT NULL,

    CONSTRAINT "ClientDetails_pkey" PRIMARY KEY ("ClientUUID")
);

-- CreateTable
CREATE TABLE "Clients" (
    "UUID" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "DOB" TIMESTAMP(3) NOT NULL,
    "Password" TEXT NOT NULL,
    "CreatedBy" TEXT NOT NULL,
    "CreatedOn" TIMESTAMP(3) NOT NULL,
    "ModifiedBy" TEXT NOT NULL,
    "ModifiedOn" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Clients_pkey" PRIMARY KEY ("UUID")
);

-- CreateTable
CREATE TABLE "ProviderDetails" (
    "ProviderUUID" TEXT NOT NULL,
    "Key" TEXT NOT NULL,
    "Value" TEXT NOT NULL,

    CONSTRAINT "ProviderDetails_pkey" PRIMARY KEY ("ProviderUUID")
);

-- CreateTable
CREATE TABLE "Providers" (
    "UUID" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "CreatedBy" TEXT NOT NULL,
    "CreatedOn" TIMESTAMP(3) NOT NULL,
    "ModifiedBy" TEXT NOT NULL,
    "ModifiedOn" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Providers_pkey" PRIMARY KEY ("UUID")
);

-- CreateIndex
CREATE UNIQUE INDEX "AppointmentDetails_Key_key" ON "AppointmentDetails"("Key");

-- CreateIndex
CREATE UNIQUE INDEX "ClientDetails_Key_key" ON "ClientDetails"("Key");

-- CreateIndex
CREATE UNIQUE INDEX "ProviderDetails_Key_key" ON "ProviderDetails"("Key");
