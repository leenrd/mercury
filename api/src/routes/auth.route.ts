import AuthController from "@/controllers/auth.controller";
import { Router } from "express";

const router = Router();
const auth = new AuthController();

router.route("/register").post(auth.register);
router.route("/login").post(auth.login);
router.route("/logout").post(auth.logout);

export default router;
