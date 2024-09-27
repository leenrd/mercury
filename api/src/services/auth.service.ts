import { accessToken, comparePassword, hashPassword } from "@/lib/auth.utils";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class User {
  constructor(public username: string, public password: string) {}

  async store() {
    const check_user = await prisma.user.findFirst({
      where: {
        username: this.username,
      },
    });
    if (check_user) {
      return new Error("User already exists");
    }

    return await prisma.user.create({
      data: {
        username: this.username,
        password: await hashPassword(this.password),
      },
    });
  }
}

class LogIn {
  constructor(public username: string, public password: string) {}

  async get() {
    const user = await prisma.user.findFirst({
      where: {
        username: this.username,
      },
    });
    if (!user) {
      return new Error("User not found");
    }

    const isMatch = await comparePassword(this.password, user.password);
    if (!isMatch) {
      return new Error("Invalid password");
    }

    return accessToken(user);
  }
}

export default class AuthService {
  static create(entity: "user" | "login_token", data: any) {
    switch (entity) {
      case "user":
        return new User(data.username, data.password).store();
      case "login_token":
        return new LogIn(data.username, data.password).get();
      default:
        throw new Error("Entity not found");
    }
  }
}
