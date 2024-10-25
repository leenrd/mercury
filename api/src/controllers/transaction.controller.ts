import { HTTP_STATUS } from "@/lib/http";
import prisma from "@/lib/prisma";
import { Request, Response } from "express";

const getTransactions_controller = async (req: Request, res: Response) => {
  try {
    const userId = req.id;

    const transactions = await prisma.transaction.findMany({
      where: {
        userId: userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    if (!transactions) {
      return res
        .status(HTTP_STATUS.NOT_FOUND)
        .send({ message: "No transactions found" });
    }

    return res.status(HTTP_STATUS.OK).send(transactions);
  } catch (error: any) {
    console.error(
      "Error creating user: @getTransactions/controller, META: ",
      error.message
    );
    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).send(error);
  }
};

const getTransactionById_controller = async (req: Request, res: Response) => {
  try {
    const userId = req.id;
    const { id } = req.params;

    const transaction = await prisma.transaction.findUnique({
      where: {
        id: id,
      },
    });

    if (!transaction) {
      return res
        .status(HTTP_STATUS.NOT_FOUND)
        .send({ message: "Transaction not found" });
    }

    return res.status(HTTP_STATUS.OK).send(transaction);
  } catch (error: any) {
    console.error(
      "Error creating user: @getTransactionById/controller, META: ",
      error.message
    );
    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).send(error);
  }
};

const getStats_controller = async (req: Request, res: Response) => {
  try {
    const userId = req.id;

    const income = await prisma.account.groupBy({
      by: ["userId"],
      _sum: {
        value: true,
      },
      where: {
        userId: userId,
        type: "FIXED",
      },
    });

    const expense = await prisma.transaction.groupBy({
      by: ["date"],
      _avg: {
        amount: true,
      },
      where: {
        userId: userId,
      },
    });

    const savings = await prisma.account.groupBy({
      by: ["value"],
      _sum: {
        value: true,
      },
      where: {
        userId: userId,
        type: "BANK",
      },
    });

    if (!income || !expense || !savings) {
      return res
        .status(HTTP_STATUS.NOT_FOUND)
        .send({ message: "No transactions found" });
    }

    const stats = {
      total_expense: income,
      total_income: expense,
      total_savings: savings,
    };

    return res.status(HTTP_STATUS.OK).send(stats);
  } catch (error: any) {
    console.error(
      "Error creating user: @getStats/controller, META: ",
      error.message
    );
    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).send(error);
  }
};

const addTransaction_controller = async (req: Request, res: Response) => {
  try {
    const userId = req.id;
    const { accountId, amount, category, merchant } = req.body;

    const transaction = await prisma.transaction.create({
      data: {
        userId: userId,
        accountId: accountId,
        amount: amount,
        category: category,
        merchant: merchant,
      },
    });

    if (!transaction) {
      return res
        .status(HTTP_STATUS.BAD_REQUEST)
        .send({ message: "Transaction not created" });
    }

    return res.status(HTTP_STATUS.CREATED).send(transaction);
  } catch (error: any) {
    console.error(
      "Error creating user: @addTransaction/controller, META: ",
      error.message
    );
    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).send(error);
  }
};

const updateTransaction_controller = async (req: Request, res: Response) => {
  try {
    const userId = req.id;
    const { id } = req.params;

    const { accountId, amount, category, merchant } = req.body;

    const transaction = await prisma.transaction.update({
      where: {
        id: id,
      },
      data: {
        accountId: accountId,
        amount: amount,
        category: category,
        merchant: merchant,
      },
    });

    if (!transaction) {
      return res
        .status(HTTP_STATUS.BAD_REQUEST)
        .send({ message: "Transaction not updated" });
    }

    return res.status(HTTP_STATUS.CREATED).send(transaction);
  } catch (error: any) {
    console.error(
      "Error creating user: @updateTransaction/controller, META: ",
      error.message
    );
    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).send(error);
  }
};

const deleteTransaction_controller = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const transaction = await prisma.transaction.delete({
      where: {
        id: id,
      },
    });

    if (!transaction) {
      return res
        .status(HTTP_STATUS.BAD_REQUEST)
        .send({ message: "Transaction not deleted" });
    }

    return res.status(HTTP_STATUS.CREATED).send(transaction);
  } catch (error: any) {
    console.error(
      "Error creating user: @deleteTransaction/controller, META: ",
      error.message
    );
    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).send(error);
  }
};

export default {
  getTransactions_controller,
  getTransactionById_controller,
  getStats_controller,
  addTransaction_controller,
  updateTransaction_controller,
  deleteTransaction_controller,
};
