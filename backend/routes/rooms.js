import express from "express";
import {
  getDefaultRoom,
  getRoomByID,
} from "../controllers/room.js";

const router = express.Router();

router.get("/", getDefaultRoom);
router.get("/:id", getRoomByID);

export default router;