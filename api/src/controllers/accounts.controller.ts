import { HTTP_STATUS } from "@/lib/http";
import prisma from "@/lib/prisma";
import { Request, Response } from "express";

const getAccounts_controller = async (req: Request, res: Response) => {
  try {
    const userId = req.id;

    const accounts = await prisma.account.findMany({
      where: {
        userId: userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    if (!accounts) {
      return res
        .status(HTTP_STATUS.NOT_FOUND)
        .send({ message: "No accounts found" });
    }

    return res.status(HTTP_STATUS.OK).send(accounts);
  } catch (error: any) {
    console.error(
      "Error creating user: @getAccounts/controller, META: ",
      error.message
    );
    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).send(error);
  }
};

const getTotalAccountsValue_controller = async (
  req: Request,
  res: Response
) => {
  try {
    const userId = req.id;

    const totalValueOfAccounts = await prisma.account.aggregate({
      where: {
        userId: userId,
      },
      _sum: {
        value: true,
      },
    });

    if (!totalValueOfAccounts) {
      return res
        .status(HTTP_STATUS.NOT_FOUND)
        .send({ message: "No accounts found" });
    }

    return res.status(HTTP_STATUS.OK).send(totalValueOfAccounts);
  } catch (error: any) {
    console.error(
      "Error creating user: @getTotalAccountsValue/controller, META: ",
      error.message
    );
    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).send(error);
  }
};

const addAccount_controller = async (req: Request, res: Response) => {
  try {
    const userId = req.id;
    const { label, type, provider, value } = req.body;

    const addAccount = await prisma.account.create({
      data: {
        label,
        type,
        provider,
        value,
        userId,
      },
    });

    if (!addAccount) {
      return res
        .status(HTTP_STATUS.BAD_REQUEST)
        .send({ message: "Account not added" });
    }

    return res.status(HTTP_STATUS.OK).send({ message: "Account added" });
  } catch (error: any) {
    console.error(
      "Error creating user: @addAccount/controller, META: ",
      error.message
    );
    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).send(error);
  }
};

const updateAccount_controller = async (req: Request, res: Response) => {
  try {
    const userId = req.id;
    const { id, label, type, provider, value } = req.body;

    const updateAccount = await prisma.account.update({
      where: {
        id: id,
      },
      data: {
        label,
        type,
        provider,
        value,
      },
    });

    if (!updateAccount) {
      return res
        .status(HTTP_STATUS.BAD_REQUEST)
        .send({ message: "Account not updated" });
    }

    return res.status(HTTP_STATUS.OK).send({ message: "Account updated" });
  } catch (error: any) {
    console.error(
      "Error creating user: @updateAccount/controller, META: ",
      error.message
    );
    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).send(error);
  }
};

const deleteAccount_controller = async (req: Request, res: Response) => {
  try {
    const userId = req.id;
    const { id } = req.body;

    const deleteAccount = await prisma.account.delete({
      where: {
        id: id,
      },
    });

    if (!deleteAccount) {
      return res
        .status(HTTP_STATUS.BAD_REQUEST)
        .send({ message: "Account not deleted" });
    }

    return res.status(HTTP_STATUS.OK).send({ message: "Account deleted" });
  } catch (error: any) {
    console.error(
      "Error creating user: @deleteAccount/controller, META: ",
      error.message
    );
    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).send(error);
  }
};

export default {
  getAccounts_controller,
  getTotalAccountsValue_controller,
  addAccount_controller,
  updateAccount_controller,
  deleteAccount_controller,
};
