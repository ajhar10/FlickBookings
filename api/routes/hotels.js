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
import { verifyAdmin } from "../utils/verifyToken.js";

//create hotel
router.post("/", verifyAdmin, createHotel);

//update hotel
router.put("/:id", verifyAdmin, updateHotel);

//Delete
router.delete("/:id", verifyAdmin, deleteHotel);

//GET
router.get("/:id", getHotel);
//GET All
router.get("/", getAllHotel);

export default router;
