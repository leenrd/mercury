import { Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const hashPassword = (password: string) => {
  return bcrypt.hash(password, 10);
};

export const comparePassword = (password: string, hashedFromDb: string) => {
  return bcrypt.compare(password, hashedFromDb);
};

type User = {
  id?: string;
};

export const accessToken = (user: User | any) => {
  return jwt.sign(
    {
      id: user.id,
      username: user.username,
    },
    process.env.JWT_SECRET as string,
    {
      expiresIn: "30min",
    }
  );
};

export const bakeCookies = (res: Response, accessToken: string) => {
  return res.cookie("acc_token", accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });
};

declare global {
  namespace Express {
    interface Request {
      id: string;
      username: string;
    }
  }
}

export const DecodeAccessToken = (access_token: string): any => {
  return jwt.verify(access_token, process.env.JWT_SECRET as string);
};
