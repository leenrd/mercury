import transaction_cn from "@/controllers/transaction.controller";
import { Router } from "express";

const router = Router();

const {
  getTransactions_controller,
  getTransactionById_controller,
  addTransaction_controller,
  updateTransaction_controller,
  deleteTransaction_controller,
} = transaction_cn;

router.route("/all").get(getTransactions_controller);
router.route("/get/:id").get(getTransactionById_controller);
router.route("/add").post(addTransaction_controller);
router.route("/update/:id").put(updateTransaction_controller);
router.route("/delete/:id").delete(deleteTransaction_controller);

export default router;
