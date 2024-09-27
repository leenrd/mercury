import express, { Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { HTTP_STATUS } from "./lib/http";
import { NODE_ENV } from "./lib/env";

// CONFIG
dotenv.config();
const api = express();
api.use(express.json());
api.use(helmet());
api.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
api.use(morgan("common"));
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: false }));
api.use(cors());

let uptime = process.uptime();
api.use("/", (_, res: Response) => {
  res.status(uptime ? HTTP_STATUS.OK : HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
    name: "Mercury server (API)",
    status: uptime ? "Operational" : "Requires Attention",
    env: NODE_ENV,
    uptime: `${uptime} ("ph-ASIA") : (Server Time - UTC)`,
  });
});
api.all("*", () => {
  throw new Error("Resource not found.");
});

// ROUTES
api.use("/auth", require("@routes/auth.route"));
api.use("/user", require("@routes/user.route"));

export default api;
