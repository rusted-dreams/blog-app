-- CreateEnum
CREATE TYPE "role" AS ENUM ('ADMIN', 'AUTHOR', 'COMMENTER', 'USER');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "Role" "role" NOT NULL DEFAULT 'USER',
ADD COLUMN     "password" TEXT;
