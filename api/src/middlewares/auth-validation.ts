import { verifyAccessToken } from "@/lib/auth.utils";
import { Request, Response, NextFunction } from "express";

const validateFn = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers["authorization" || "Authorization"];

  if (!token?.startsWith("Bearer ")) {
    console.log("Unauthorized Error: @Middleware/validateFn");
    return res.status(401).json({ message: "Unauthorized" });
  }

  const access_token = token.split(" ")[1];
  verifyAccessToken(req, res, access_token);

  return next();
};

export default validateFn;
