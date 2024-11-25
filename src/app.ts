import express, { Application, Request, Response } from "express";
import cors from "cors";
import { BicycleRoutes } from "./app/modules/bicycle/bicycle.router";
const app: Application = express();

// Perser-------->
app.use(express.json());
app.use(cors());

// application router ---------->
app.use('/api', BicycleRoutes)

app.get("/", (req: Request, res: Response) => {
  res.send("Bi Cycle Server is Running");
});

export default app;
