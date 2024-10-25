import { Request, Response } from "express";
import prisma from "@/lib/prisma";
import { HTTP_STATUS } from "@/lib/http";

const getLiabilities_controller = async (req: Request, res: Response) => {
  try {
    const user_id = req.id;
    const Liabilities = await prisma.account.groupBy({
      by: ["type"],
      where: {
        userId: user_id,
        type: {
          equals: "CREDIT",
        },
      },
    });

    if (!Liabilities) {
      return res.status(HTTP_STATUS.BAD_REQUEST).json();
    }

    return res.status(HTTP_STATUS.OK).json(Liabilities);
  } catch (error: any) {
    console.error(
      "Error creating user: @getLiabilities/controller, META: ",
      error.message
    );
    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).send(error);
  }
};

const getLiabilitiesTotal_controller = async (req: Request, res: Response) => {
  try {
    const user_id = req.id;
    const LiabilitiesSum = await prisma.account.aggregate({
      _sum: {
        value: true,
      },
      where: {
        userId: user_id,
        type: {
          equals: "CREDIT",
        },
      },
    });

    if (!LiabilitiesSum) {
      return res.status(HTTP_STATUS.BAD_REQUEST).json();
    }

    return res.status(HTTP_STATUS.OK).json(LiabilitiesSum);
  } catch (error: any) {
    console.error(
      "Error creating user: @getLiabilitiesTotal/controller, META: ",
      error.message
    );
    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).send(error);
  }
};

export default { getLiabilities_controller, getLiabilitiesTotal_controller };
