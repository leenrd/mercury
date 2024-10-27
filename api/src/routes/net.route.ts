import net_cn from "@/controllers/net.controller";
import { Router } from "express";

const router = Router();

const { getNetGraph, getNetStat } = net_cn;

router.route("/total").get(getNetStat);
router.route("/graph").get(getNetGraph);

export default router;
