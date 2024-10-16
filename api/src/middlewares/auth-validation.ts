import { DecodeAccessToken } from "@/lib/auth.utils";
import { Request, Response, NextFunction } from "express";

const validateAuthFn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers["authorization" || "Authorization"];

  if (!token) {
    console.log("Unauthorized Error: @Middleware/validateFn");
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const access_token = token.split(" ")[1];
    const decoded = DecodeAccessToken(access_token);

    req.id = decoded.id;
    req.username = decoded.username;

    return next();
  } catch (error) {
    console.log("Unauthorized Error: @Middleware/validateFn");
    return res.status(401).json({ message: "Access token invalid or expired" });
  }
};

export default validateAuthFn;
