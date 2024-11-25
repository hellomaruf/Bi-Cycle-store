import { BiCycleInterface, UpdateData } from "./bicycle.interface";
import { BicycleModel } from "./bicycle.model";
import { ObjectId } from "mongodb";

// create a bicycle--------->
const createBicycleProductIntoDB = async (bicycle: BiCycleInterface) => {
  const result = await BicycleModel.create(bicycle);
  return result;
};

// get all data by using searchTerm------------->
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

// Get Specific data ------------->
const specificBicycleFromDB = async (id: string) => {
  const result = await BicycleModel.findOne({ _id: new ObjectId(id) });
  return result;
};

// Update price and quantity ---------------->
const updateBicycleFromDB = async (id: string, updateData: UpdateData) => {
  const result = await BicycleModel.findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: updateData },
    { new: true }
  );
  return result;
};

// Delete a specific data ------------>
const deleteBicycleFromDB = async (id: string) => {
  const result = await BicycleModel.findOneAndDelete({ _id: new ObjectId(id) });
  return result;
};

export const BicycleService = {
  createBicycleProductIntoDB,
  getAllBicycleFromDB,
  specificBicycleFromDB,
  updateBicycleFromDB,
  deleteBicycleFromDB,
};
