import express from "express";
import {
  countByCity,
  createHotel,
  deleteHotel,
  getAllHotel,
  getHotel,
  updateHotel,
  countByType,
  getHotelRoom,
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
router.get("/find/:id", getHotel);
//GET All
router.get("/", getAllHotel);
//count by city
router.get("/countByCity", countByCity);
//Count by type
router.get("/countByType", countByType);
router.get("/rooms/:id", getHotelRoom);

export default router;
