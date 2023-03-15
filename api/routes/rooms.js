import express from "express";
import {
  createRoom,
  deleteRoom,
  getAllRoom,
  getRoom,
  updateRoom,
  updateRoomAvailability,
} from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

//create hotel
router.post("/:hotelid", verifyAdmin, createRoom);

//update hotel
router.put("/:id", verifyAdmin, updateRoom);
router.put("/availability/:id", updateRoomAvailability);

//Delete
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

//GET
router.get("/:id", getRoom);
//GET All
router.get("/", getAllRoom);

export default router;
