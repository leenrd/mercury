import { HTTP_STATUS } from "@/lib/http";
import prisma from "@/lib/prisma";
import { Request, Response } from "express";

const getTransactions_controller = async (req: Request, res: Response) => {
  try {
    const userId = req.id;
    const page = parseInt(req.query.page as string) || 1;
    const pageSize = parseInt(req.query.pageSize as string) || 5;

    const transactions = await prisma.transaction.findMany({
      include: {
        account: {
          select: {
            label: true,
          },
        },
      },
      where: {
        userId: userId,
      },
      orderBy: {
        createdAt: "desc",
      },
      skip: (page - 1) * pageSize,
      take: pageSize,
    });

    const transactionCount = await prisma.transaction.count({
      where: {
        userId: userId,
      },
    });

    if (!transactions.length) {
      return res
        .status(HTTP_STATUS.NOT_FOUND)
        .send({ message: "No transactions found" });
    }

    return res.status(HTTP_STATUS.OK).send({
      transactions: transactions,
      pagination: {
        page: page,
        pageSize: pageSize,
        total: transactionCount,
        totalPages: Math.ceil(transactionCount / pageSize),
      },
    });
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

    const income = await prisma.account.aggregate({
      _sum: {
        value: true,
      },
      where: {
        userId: userId,
        type: "FIXED",
      },
    });

    const expense = await prisma.transaction.aggregate({
      _avg: {
        amount: true,
      },
      where: {
        userId: userId,
      },
    });

    const savings = await prisma.account.aggregate({
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
      total_income: income,
      total_expense: expense,
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
        merchant: merchant,
        amount: amount,
        accountId: accountId,
        category: category,
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
