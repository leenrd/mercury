import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { HTTP_STATUS } from "@/lib/http";
import { JWT_SECRET } from "./env";

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
      user: {
        id: user.id,
        username: user.username,
      },
    },
    JWT_SECRET as string,
    {
      expiresIn: "30min",
    }
  );
};

export const bakeCookies = (res: Response, accessToken: string) => {
  return res.cookie("acc_token", accessToken, {
    httpOnly: true,
    maxAge: 86400000,
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

export const verifyAccessToken = (
  req: Request,
  res: Response,
  access_token: string
) => {
  return jwt.verify(
    access_token,
    JWT_SECRET as string,
    async (err, decoded: any) => {
      if (err) {
        return res
          .status(HTTP_STATUS.UNAUTHORIZED)
          .json({ message: "Invalid Token" });
      }

      req.id = decoded.user.id;
      req.username = decoded.user.username;
    }
  );
};
