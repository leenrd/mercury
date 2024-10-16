import { bakeCookies } from "@/lib/auth.utils";
import { HTTP_STATUS } from "@/lib/http";
import AuthService from "@/services/auth.service";
import { Request, Response } from "express";

interface _auth {
  register(req: Request, res: Response): Promise<any>;
  login(req: Request, res: Response): Promise<any>;
  logout(req: Request, res: Response): Promise<any>;
}

// repository implementation experiment
export default class AuthController implements _auth {
  constructor() {}

  async register(req: Request<{}, {}, auth_dto>, res: Response) {
    try {
      const { username, password } = req.body;
      const new_user = await AuthService.create("user", { username, password });

      if (new_user instanceof Error) {
        return res
          .status(HTTP_STATUS.INVALID_INPUT)
          .json({ message: new_user.message });
      }

      return res
        .status(HTTP_STATUS.CREATED)
        .json({ message: "User created successfully" });
    } catch (error: any) {
      console.error(
        "Error creating user: @AuthController/register, META: ",
        error.message
      );
      return res.status(500).send(error);
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
        return res
          .status(HTTP_STATUS.INVALID_INPUT)
          .json({ message: access_token.message });
      }

      bakeCookies(res, access_token as string);

      return res
        .status(HTTP_STATUS.OK)
        .json({ message: "User logged in", access_token });
    } catch (error: any) {
      console.error(
        "Error creating user: @AuthController/login, META: ",
        error.message
      );
      return res.status(500).send(error);
    }
  }

  async logout(req: Request, res: Response) {
    try {
      console.log("Logging out user");
      return res
        .clearCookie("acc_token", {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
        })
        .status(HTTP_STATUS.OK)
        .json({ message: "User logged out" });
    } catch (error: any) {
      console.error(
        "Error creating user: @AuthController/logout, META: ",
        error.message
      );
      return res.status(500).send(error);
    }
  }
}
