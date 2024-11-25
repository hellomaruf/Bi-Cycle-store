import { BiCycleInterface, UpdateData } from "./bicycle.interface";
import { BicycleModel } from "./bicycle.model";
import { ObjectId } from "mongodb";

const createBicycleProductIntoDB = async (bicycle: BiCycleInterface) => {
  const result = await BicycleModel.create(bicycle);
  return result;
};

const getAllBicycleFromDB = async (searchTerm?: string) => {
  let filter = {};
  if (searchTerm) {
    filter = {
      $or: [
        { name: { $regex: searchTerm, $options: "i" } },
        { brand: { $regex: searchTerm, $options: "i" } },
        { type: { $regex: searchTerm, $options: "i" } },
      ],
    };
  }

  const result = await BicycleModel.find(filter);
  return result;
};

const specificBicycleFromDB = async (id: string) => {
  const result = await BicycleModel.findOne({ _id: new ObjectId(id) });
  return result;
};

const updateBicycleFromDB = async (id: string, updateData: UpdateData) => {
  const result = await BicycleModel.findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: updateData },
    { new: true }
  );
  return result;
};

export const BicycleService = {
  createBicycleProductIntoDB,
  getAllBicycleFromDB,
  specificBicycleFromDB,
  updateBicycleFromDB,
};
