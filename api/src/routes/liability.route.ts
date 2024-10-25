import liability_cn from "@/controllers/liability.controller";
import { Router } from "express";

const router = Router();

const { getLiabilitiesTotal_controller, getLiabilities_controller } =
  liability_cn;

router.route("/").get(getLiabilities_controller);
router.route("/total").get(getLiabilitiesTotal_controller);

export default router;
