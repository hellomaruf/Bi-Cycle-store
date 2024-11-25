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
    const { searchTerm } = req.query;
    const result = await BicycleService.getAllBicycleFromDB(
      searchTerm as string
    );
    res.status(200).json({
      message: "Bicycles retrieved successfully",
      status: true,
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSpacificBicycle = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await BicycleService.specificBicycleFromDB(productId);

    res.status(200).json({
      message: "Bicycles retrieved successfully",
      status: true,
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const updateABicycle = async (req: Request, res: Response) => {
  const { productId } = req.params;
  const updateData = req.body;
  try {
    const result = await BicycleService.updateBicycleFromDB(
      productId,
      updateData
    );
    res.status(200).json({
      message: "Bicycle updated successfully",
      status: true,
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Bicycle updated failed",
      error: err,
    });
  }
};
const deleteABicycle = async (req: Request, res: Response) => {
  const { productId } = req.params;
  try {
    const result = await BicycleService.deleteBicycleFromDB(productId);
    res.status(200).json({
      message: "Bicycle deleted successfully",
      status: true,
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Bicycle deleted failed",
      error: err,
    });
  }
};

export const BicycleControllers = {
  createBicycle,
  getAllBicycle,
  getSpacificBicycle,
  updateABicycle,
  deleteABicycle,
};
