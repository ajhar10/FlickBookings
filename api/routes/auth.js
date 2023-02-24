import express from "express";
const router = express.Router();
router.get("/", (req, res) => {
  res.send("Authentication route");
});

router.get("/rooms", (req, res) => {
  res.send("Rooms Ath");
});

export default router;
