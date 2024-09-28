import { HTTP_STATUS } from "@/lib/http";
import prisma from "@/lib/prisma";
import { Request, Response } from "express";

const getUser_controller = async (req: Request, res: Response) => {
  try {
    const user_id = req.id;
    if (!user_id) {
      console.log("No token stored @authFn/middleware");
      return res
        .status(HTTP_STATUS.BAD_REQUEST)
        .json({ message: "Token doesn't exists" });
    }

    const user = await prisma.user.findFirstOrThrow({
      where: {
        id: user_id,
      },
    });

    return res.status(HTTP_STATUS.OK).send(user);
  } catch (error) {
    console.error("Error: @getUser_controller", error);
    res.status(500).send(error);
  }
};

export default getUser_controller;
