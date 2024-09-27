import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class User {
  constructor(public username: string, public password: string) {}

  async store() {
    return await prisma.user.create({
      data: {
        username: this.username,
        // hash the password
        password: this.password,
      },
    });
  }
}

export default class AuthService {
  static create(entity: any, data: any) {
    switch (entity) {
      case "user":
        return new User(data.username, data.password).store();
      default:
        throw new Error("Entity not found");
    }
  }
}
