import { PrismaClient, role } from "@prisma/client";

const prisma = new PrismaClient();


export const createUser = async (name: string, email: string) => {
  const res = await prisma.user.create({
    data: {
      name,
      email,
    },
    select: {
      id: true,
      name: true,
      email: true,
      isAdmin: true,
    }
  });
}


export const createAdmin = async (name: string, email: string, password: string, isAdmin: boolean, Role: role) => {
  const userExist = await prisma.user.findUnique({ where: { email } });
  if (userExist) {
    throw new Error("User already exist");
  }
  const res = await prisma.user.create({
    data: {
      name,
      email,
      password,
      isAdmin,
      Role,
    },
    select: {
      id: true,
      name: true,
      email: true,
      isAdmin: true,
    }
  });

  return res;
}