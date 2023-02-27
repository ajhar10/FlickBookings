import express from "express";
import {
  deleteUser,
  getAllUser,
  getUser,
  updateUser,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

//check Authorization
// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("hello user, you are logged in");
// });

// //Check User
// router.get("/checkUser/:id", verifyUser, (req, res, next) => {
//   res.send("You are logged in. and delete your account ");
// });
// //Check Admin
// router.get("/checkAdmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("You are Admin. and delete All account ");
// });

// //update user
router.put("/:id", verifyUser, updateUser);

// //Delete
router.delete("/:id", verifyUser, deleteUser);

//get user by id
router.get("/:id", verifyUser, getUser);

// //GET All
router.get("/", verifyAdmin, getAllUser);

export default router;
