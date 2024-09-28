import getUser_controller from "@/controllers/user.controller";
import { Router } from "express";

const router = Router();

router.route("/").post(getUser_controller);

export default router;
