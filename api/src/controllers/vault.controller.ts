import { HTTP_STATUS } from "@/lib/http";
import { Request, Response } from "express";

const getVault_controller = async (req: Request, res: Response) => {
  try {
    return res.status(HTTP_STATUS.OK);
  } catch (error: any) {
    console.error(
      "Error creating user: @getVault/controller, META: ",
      error.message
    );
    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).send(error);
  }
};

const addVault_controller = async (req: Request, res: Response) => {
  try {
    return res.status(HTTP_STATUS.OK);
  } catch (error: any) {
    console.error(
      "Error creating user: @addVault/controller, META: ",
      error.message
    );
    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).send(error);
  }
};

const updateVault_controller = async (req: Request, res: Response) => {
  try {
    return res.status(HTTP_STATUS.OK);
  } catch (error: any) {
    console.error(
      "Error creating user: @updateVault/controller, META: ",
      error.message
    );
    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).send(error);
  }
};

const deleteVault_controller = async (req: Request, res: Response) => {
  try {
    return res.status(HTTP_STATUS.OK);
  } catch (error: any) {
    console.error(
      "Error creating user: @deleteVault/controller, META: ",
      error.message
    );
    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).send(error);
  }
};

export default {
  getVault_controller,
  addVault_controller,
  updateVault_controller,
  deleteVault_controller,
};
