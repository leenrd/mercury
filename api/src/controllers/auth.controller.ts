import { bakeCookies } from "@/lib/auth.utils";
import { HTTP_STATUS } from "@/lib/http";
import AuthService from "@/services/auth.service";
import { Request, Response } from "express";

interface _auth {
  register(req: Request, res: Response): Promise<void>;
  login(req: Request, res: Response): Promise<void>;
  logout(res: Response): Promise<void>;
}

// repository implementation experiment
export default class AuthController implements _auth {
  constructor() {}

  async register(req: Request<{}, {}, auth_dto>, res: Response) {
    try {
      const { username, password } = req.body;
      const new_user = await AuthService.create("user", { username, password });

      if (new_user instanceof Error) {
        res.status(HTTP_STATUS.BAD_REQUEST).json({ message: new_user.message });
        return;
      }

      res
        .status(HTTP_STATUS.CREATED)
        .json({ message: "User created successfully", new_user });
    } catch (error) {
      console.error("Error creating user: @AuthController/register");
      res.status(500).send(error);
    }
  }

  async login(req: Request<{}, {}, auth_dto>, res: Response) {
    try {
      const { username, password } = req.body;
      const access_token = await AuthService.create("login_token", {
        username,
        password,
      });

      if (access_token instanceof Error) {
        res
          .status(HTTP_STATUS.BAD_REQUEST)
          .json({ message: access_token.message });
        return;
      }

      bakeCookies(res, access_token);

      res.status(HTTP_STATUS.OK).json({ message: "User logged in" });
    } catch (error) {
      console.error("Error logging in: @AuthController/login");
      res.status(500).send(error);
    }
  }

  async logout(res: Response) {
    try {
      res.clearCookie("acc_token");
      res.status(HTTP_STATUS.OK).json({ message: "User logged out" });
    } catch (error) {
      console.error("Error logging out: @AuthController/logout");
      res.status(500).send(error);
    }
  }
}
