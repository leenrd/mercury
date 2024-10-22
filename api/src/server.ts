import express, { Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { HTTP_STATUS } from "./lib/http";
import { NODE_ENV } from "./lib/env";
import validateAuthFn from "./middlewares/auth-validation";
import authRoute from "@routes/auth.route";
import userRoute from "@routes/user.route";
import assetRoute from "@routes/assets.route";
import cookieParser from "cookie-parser";

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
api.use("/assets", validateAuthFn, assetRoute);
api.use("/vault", validateAuthFn, assetRoute);

// ERROR HANDLING
api.all("*", () => {
  throw new Error("Resource not found.");
});
export default api;
