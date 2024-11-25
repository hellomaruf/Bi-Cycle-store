import express, { Application, Request, Response } from "express";
import cors from "cors";
const app: Application = express();

// Perser-------->
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Bi Cycle Server is Running");
});

export default app;
