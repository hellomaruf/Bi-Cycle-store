import { Request, Response } from "express";
import { BicycleService } from "./bicycle.service";

const createBicycle = async (req: Request, res: Response) => {
  try {
    const bicycle = req.body;
    const result = await BicycleService.createBicycleProductIntoDB(bicycle);
    res.status(200).json({
      success: true,
      message: "Bicycle created successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllBicycle = async (req: Request, res: Response) => {
  try {
    const result = await BicycleService.getAllBicycleFromDB();
    res.status(200).json({
      message: "Bicycles retrieved successfully",
      status: true,
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const BicycleControllers = {
  createBicycle,
  getAllBicycle,
};
