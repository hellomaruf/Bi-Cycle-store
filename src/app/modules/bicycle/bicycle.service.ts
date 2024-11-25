import { BiCycleInterface } from "./bicycle.interface";
import { BicycleModel } from "./bicycle.model";

const createBicycleProductIntoDB = async (bicycle: BiCycleInterface) => {
  const result = await BicycleModel.create(bicycle);
  return result;
};

const getAllBicycleFromDB = async () => {
  const result = await BicycleModel.find();
  return result;
};



export const BicycleService = {
  createBicycleProductIntoDB,
  getAllBicycleFromDB,
};
