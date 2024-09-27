import { bakeCookies } from "@/lib/auth.utils";
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
      res.status(500).send("Error creating user: @AuthController/register");
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { username, password } = req.body;
      const access_token = await AuthService.create("login_token", {
        username,
        password,
      });

      bakeCookies(res, access_token);

      res.status(HTTP_STATUS.OK).json({ message: "User logged in" });
    } catch (error) {
      console.error(error);
      res.status(500).send("Error logging in: @AuthController/login");
    }
  }

  async logout(req: Request, res: Response) {
    try {
      res.clearCookie("acc_token");
      res.status(HTTP_STATUS.OK).json({ message: "User logged out" });
    } catch (error) {
      console.error(error);
      res.status(500).send("Error logging out: @AuthController/logout");
    }
  }
}
