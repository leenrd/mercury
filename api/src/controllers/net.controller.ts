import { HTTP_STATUS } from "@/lib/http";
import prisma from "@/lib/prisma";
import { Request, Response } from "express";

const getNetStat = async (req: Request, res: Response) => {
  try {
    const userId = req.id;

    const assetsSum = await prisma.account.aggregate({
      where: {
        userId,
        type: {
          not: "CREDIT",
        },
      },
      _sum: {
        value: true,
      },
    });

    const liabilitiesSum = await prisma.account.aggregate({
      where: {
        userId,
        type: {
          equals: "CREDIT",
        },
      },
      _sum: {
        value: true,
      },
    });

    if (!assetsSum || !liabilitiesSum) {
      return res
        .status(HTTP_STATUS.NOT_FOUND)
        .send({ message: "NetStat not found" });
    }

    const net_worth =
      (assetsSum._sum.value || 0) - (liabilitiesSum._sum.value || 0);

    const net_worth_trend = net_worth > 0 ? "UP" : "DOWN";

    return res.status(HTTP_STATUS.OK).send({
      net_worth,
      net_worth_trend,
    });
  } catch (error: any) {
    console.error(
      "Error creating user: @getNetStat/controller, META: ",
      error.message
    );
    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).send(error);
  }
};

const getNetGraph = async (req: Request, res: Response) => {
  try {
    const userId = req.id;

    const chartData = await prisma.account.groupBy({
      by: ["createdAt"],
      _sum: {
        value: true,
      },
      where: {
        userId,
        type: {
          not: "CREDIT",
        },
        createdAt: {
          gte: new Date(new Date().getFullYear(), 0, 1),
        },
      },
    });

    if (!chartData.length) {
      return res
        .status(HTTP_STATUS.NOT_FOUND)
        .send({ message: "NetGraph not found" });
    }

    const formattedGraphData = chartData.map((data) => {
      const date = new Date(data.createdAt);
      const monthName = date.toLocaleString("default", { month: "long" });
      return {
        month: monthName,
        value: data._sum.value || 0,
      };
    });

    return res.status(HTTP_STATUS.OK).send(formattedGraphData);
  } catch (error: any) {
    console.error(
      "Error creating user: @getNetGraph/controller, META: ",
      error.message
    );
    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).send(error);
  }
};

export default { getNetStat, getNetGraph };
