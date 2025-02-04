import { Request, Response } from "express";
import prisma from "@/lib/prisma";
import { HTTP_STATUS } from "@/lib/http";

const getAssets_controller = async (req: Request, res: Response) => {
  try {
    const user_id = req.id;
    const assets = await prisma.account.groupBy({
      by: ["type"],
      where: {
        userId: user_id,
        type: {
          not: "CREDIT",
        },
      },
    });

    if (!assets) {
      return res.status(HTTP_STATUS.BAD_REQUEST).json();
    }

    return res.status(HTTP_STATUS.OK).json(assets);
  } catch (error: any) {
    console.error(
      "Error creating user: @getAssets/controller, META: ",
      error.message
    );
    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).send(error);
  }
};

const getAssetTotal_controller = async (req: Request, res: Response) => {
  try {
    const user_id = req.id;
    const assetSum = await prisma.account.aggregate({
      _sum: {
        value: true,
      },
      where: {
        userId: user_id,
        type: {
          not: "CREDIT",
        },
      },
    });

    if (!assetSum) {
      return res.status(HTTP_STATUS.BAD_REQUEST).json();
    }

    return res.status(HTTP_STATUS.OK).json(assetSum);
  } catch (error: any) {
    console.error(
      "Error creating user: @getAssetTotal/controller, META: ",
      error.message
    );
    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).send(error);
  }
};

export default { getAssets_controller, getAssetTotal_controller };
