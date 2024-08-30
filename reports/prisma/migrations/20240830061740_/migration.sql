-- CreateTable
CREATE TABLE "data_customer" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,

    CONSTRAINT "data_customer_pkey" PRIMARY KEY ("id")
);
