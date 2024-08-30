/*
  Warnings:

  - Added the required column `tableTitle` to the `data_customer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "data_customer" ADD COLUMN     "tableTitle" TEXT NOT NULL;
