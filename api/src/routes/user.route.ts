import user_cn from "@/controllers/user.controller";
import { Router } from "express";

const router = Router();

const { getUser_controller, updateUser_controller } = user_cn;

router.route("/").get(getUser_controller);
router.route("/profile/update").put(updateUser_controller);

export default router;
