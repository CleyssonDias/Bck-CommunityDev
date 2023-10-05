-- CreateTable
CREATE TABLE "UserOwner" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "propretyId" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "birthDay" INTEGER NOT NULL,
    "ownerNumber" INTEGER NOT NULL,
    "maritialState" TEXT NOT NULL,
    "phoneNumber" INTEGER NOT NULL,
    "CPF" INTEGER NOT NULL,
    "ownerPicture" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "UserOwner_email_key" ON "UserOwner"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserOwner_CPF_key" ON "UserOwner"("CPF");
