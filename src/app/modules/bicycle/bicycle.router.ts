import express from "express";
import { BicycleControllers } from "./bicycle.controller";
const router = express.Router();

router.post("/products", BicycleControllers.createBicycle);

router.get("/products", BicycleControllers.getAllBicycle);

export const BicycleRoutes = router;
