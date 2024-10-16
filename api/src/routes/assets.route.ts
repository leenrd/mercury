import asset_cn from "@/controllers/asset.controller";
import { Router } from "express";

const router = Router();

const { getAssets_controller, getAssetTotal_controller } = asset_cn;

router.route("/").get(getAssets_controller);
router.route("/total").get(getAssetTotal_controller);

export default router;
