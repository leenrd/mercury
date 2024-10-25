import accounts_cn from "@/controllers/accounts.controller";
import { Router } from "express";

const router = Router();

const {
  getAccounts_controller,
  getTotalAccountsValue_controller,
  addAccount_controller,
  deleteAccount_controller,
  updateAccount_controller,
} = accounts_cn;

router.route("/all").get(getAccounts_controller);
router.route("/total").get(getTotalAccountsValue_controller);

router.route("/add").post(addAccount_controller);
router.route("/update").put(updateAccount_controller);
router.route("/delete").delete(deleteAccount_controller);

export default router;
