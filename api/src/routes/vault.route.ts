import { Router } from "express";
import vault_cn from "@controllers/vault.controller";

const router = Router();

const {
  getVault_controller,
  addVault_controller,
  updateVault_controller,
  deleteVault_controller,
} = vault_cn;

router
  .route("/")
  .get(getVault_controller)
  .post(addVault_controller)
  .put(updateVault_controller)
  .delete(deleteVault_controller);

export default router;
