import express from "express";
import { BicycleControllers } from "./bicycle.controller";
const router = express.Router();

router.post("/products", BicycleControllers.createBicycle);

router.get("/products", BicycleControllers.getAllBicycle);

router.get("/products/:productId", BicycleControllers.getSpacificBicycle);

router.put("/products/:productId", BicycleControllers.updateABicycle);

export const BicycleRoutes = router;
