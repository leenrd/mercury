import { hashPassword } from "@/lib/auth.utils";
import { HTTP_STATUS } from "@/lib/http";
import prisma from "@/lib/prisma";
import { Request, Response } from "express";

const getUser_controller = async (req: Request, res: Response) => {
  try {
    const user_id = req.id;

    const user = await prisma.user.findFirst({
      where: {
        id: user_id,
      },
    });

    if (!user) {
      return res
        .status(HTTP_STATUS.UNAUTHORIZED)
        .json({ message: "User not found" });
    }

    const { password, ...rest } = user;

    return res.status(HTTP_STATUS.OK).send(rest);
  } catch (error: any) {
    console.error(
      "Error creating user: @getUser/controller, META: ",
      error.message
    );
    return res.status(500).send(error);
  }
};

const updateUser_controller = async (req: Request, res: Response) => {
  try {
    const user_id = req.id;
    const { username, password } = req.body;

    const user = await prisma.user.findFirst({
      where: {
        username: username,
      },
    });

    if (!user) {
      return res
        .status(HTTP_STATUS.UNAUTHORIZED)
        .json({ message: "Username not found" });
    }

    const updatedUser = await prisma.user.update({
      where: {
        id: user_id,
      },
      data: {
        username: username,
        password: await hashPassword(password),
      },
    });

    return res.status(HTTP_STATUS.OK).send(updatedUser);
  } catch (error: any) {
    console.error(
      "Error creating user: @updateUser/controller, META: ",
      error.message
    );
    return res.status(500).send(error);
  }
};
export default { getUser_controller, updateUser_controller };
