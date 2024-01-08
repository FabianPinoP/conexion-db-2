import express from "express";
import {
  getAllTravels,
  createTravels,
  updateTravels,
  deleteTravels,
} from "../src/controllers/travelsController.js";
const router = express.Router();

router.get("/travels", getAllTravels);
router.post("/travels", createTravels);
router.put("/travels/:id", updateTravels);
router.delete("/travels/:id", deleteTravels);

export default router;
