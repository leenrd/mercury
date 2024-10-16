import { Request, Response } from "express";
import prisma from "@/lib/prisma";

const getAssets_controller = async (req: Request, res: Response) => {
  try {
    // const user_id = req.id;
    // console.log("user_id", user_id);

    const temp_assets = [
      { type: "Real Estate", quantity: 173, fill: "#0090FF" },
      { type: "Public Assets", quantity: 173, fill: "var(--color-edge)" },
      { type: "Cash", quantity: 700, fill: "#6E56CF" },
      { type: "Funding", quantity: 173, fill: "#46A758" },
      { type: "Venture Capital", quantity: 173, fill: "var(--color-safari)" },
      { type: "other", quantity: 190, fill: "var(--color-other)" },
    ];

    return res.status(200).json(temp_assets);
  } catch (error: any) {
    console.error(
      "Error creating user: @getAssets/controller, META: ",
      error.message
    );
    return res.status(500).send(error);
  }
};

const getAssetTotal_controller = async (req: Request, res: Response) => {
  try {
    // const user_id = req.id;
    // console.log("user_id", user_id);

    const temp_assets = [
      { type: "Real Estate", quantity: 173, fill: "#0090FF" },
      { type: "Public Assets", quantity: 173, fill: "var(--color-edge)" },
      { type: "Cash", quantity: 700, fill: "#6E56CF" },
      { type: "Funding", quantity: 173, fill: "#46A758" },
      { type: "Venture Capital", quantity: 173, fill: "var(--color-safari)" },
      { type: "other", quantity: 190, fill: "var(--color-other)" },
    ];

    const total_assets = temp_assets.reduce(
      (acc, asset) => acc + asset.quantity,
      0
    );

    return res.status(200).json(total_assets);
  } catch (error: any) {
    console.error(
      "Error creating user: @getAssetTotal/controller, META: ",
      error.message
    );
    return res.status(500).send(error);
  }
};

export default { getAssets_controller, getAssetTotal_controller };
