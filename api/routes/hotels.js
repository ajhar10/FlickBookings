import express from "express";
import {
  createHotel,
  deleteHotel,
  getAllHotel,
  getHotel,
  updateHotel,
} from "../controllers/hotel.js";
const router = express.Router();
import { createError } from "../utils/error.js";

//create hotel
router.post("/", createHotel);

//update hotel
router.put("/:id", updateHotel);

//Delete
router.delete("/:id", deleteHotel);

//GET
router.get("/:id", getHotel);
//GET All
router.get("/", getAllHotel);

export default router;
