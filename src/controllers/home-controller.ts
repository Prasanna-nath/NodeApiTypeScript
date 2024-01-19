import { Request, Response } from "express";
import express from "express";
import * as service from "../services/home-service";

const router = express.Router();

router.get("/home", (req: Request, res: Response) => {
  return res.send(service.goHome());
});

export default router;
