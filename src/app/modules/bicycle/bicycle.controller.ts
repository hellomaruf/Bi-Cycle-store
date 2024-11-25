import { Request, Response } from "express";
import { BicycleService } from "./bicycle.service";

const createStudent = async (req: Request, res: Response) => {
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

export const  BicycleControllers = {
    createStudent
}