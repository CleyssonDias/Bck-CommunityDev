-- CreateTable
CREATE TABLE "PropertyOfOwner" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_of_UserOwner" INTEGER NOT NULL,
    "cnpj" TEXT NOT NULL,
    "crf" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "county" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "coordinates" TEXT NOT NULL,
    CONSTRAINT "PropertyOfOwner_id_of_UserOwner_fkey" FOREIGN KEY ("id_of_UserOwner") REFERENCES "UserOwner" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "PropertyOfOwner_cnpj_key" ON "PropertyOfOwner"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "PropertyOfOwner_crf_key" ON "PropertyOfOwner"("crf");
