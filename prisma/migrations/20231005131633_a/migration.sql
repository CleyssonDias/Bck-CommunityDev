-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserOwner" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "propretyId" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "birthDay" INTEGER NOT NULL,
    "ownerNumber" INTEGER NOT NULL,
    "maritialState" TEXT NOT NULL,
    "phoneNumber" INTEGER NOT NULL,
    "CPF" TEXT NOT NULL,
    "ownerPicture" TEXT NOT NULL
);
INSERT INTO "new_UserOwner" ("CPF", "birthDay", "email", "id", "maritialState", "name", "ownerNumber", "ownerPicture", "password", "phoneNumber", "propretyId") SELECT "CPF", "birthDay", "email", "id", "maritialState", "name", "ownerNumber", "ownerPicture", "password", "phoneNumber", "propretyId" FROM "UserOwner";
DROP TABLE "UserOwner";
ALTER TABLE "new_UserOwner" RENAME TO "UserOwner";
CREATE UNIQUE INDEX "UserOwner_email_key" ON "UserOwner"("email");
CREATE UNIQUE INDEX "UserOwner_CPF_key" ON "UserOwner"("CPF");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
