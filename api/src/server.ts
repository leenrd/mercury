import express, { Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { HTTP_STATUS } from "./lib/http";
import { NODE_ENV } from "./lib/env";
import validateAuthFn from "./middlewares/auth-validation";
import cookieParser from "cookie-parser";
import authRoute from "@routes/auth.route";
import userRoute from "@routes/user.route";
import accountRoutes from "@routes/accounts.route";
import assetRoute from "@routes/assets.route";
import transactionRoute from "@routes/transactions.route";
import netRoutes from "@routes/net.route";
import liabilityRoute from "@routes/liability.route";

// CONFIG
dotenv.config();
const api = express();
api.use(express.json());
api.use(helmet());
api.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
api.use(morgan("common"));
api.use(bodyParser.json());
api.use(cookieParser());
api.use(bodyParser.urlencoded({ extended: false }));
api.use(cors());

let uptime = process.uptime();
api.get("/", (_, res: Response) => {
  res.status(uptime ? HTTP_STATUS.OK : HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
    name: "Mercury server (API)",
    status: uptime ? "Operational" : "Requires Attention",
    env: NODE_ENV,
    uptime: `${uptime} ("ph-ASIA") : (Server Time - UTC)`,
  });
});

// ROUTES
api.use("/auth", authRoute);
api.use("/user", validateAuthFn, userRoute);

api.use("/transaction", validateAuthFn, transactionRoute);
api.use("/account", validateAuthFn, accountRoutes);

api.use("/net", validateAuthFn, netRoutes);
api.use("/asset", validateAuthFn, assetRoute);
api.use("/liability", validateAuthFn, liabilityRoute);

// ERROR HANDLING
api.all("*", () => {
  throw new Error("Resource not found.");
});
export default api;
