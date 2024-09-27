import { HTTP_STATUS } from "@/lib/http";
import AuthService from "@/services/auth.service";
import { Request, Response } from "express";

interface _auth {
  register(req: Request, res: Response): Promise<void>;
  login(req: Request, res: Response): Promise<void>;
  logout(req: Request, res: Response): Promise<void>;
}

// repository implementation
export default class AuthController implements _auth {
  constructor() {}

  async register(req: Request, res: Response) {
    try {
      const { username, password } = req.body;
      const new_user = await AuthService.create("user", { username, password });

      res
        .status(HTTP_STATUS.CREATED)
        .json({ message: "User created successfully", new_user });
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }

  async login(req: Request, res: Response) {
    // Login logic
  }

  async logout(req: Request, res: Response) {
    // Logout logic
  }
}
