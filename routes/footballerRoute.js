import express from "express";
import protectRoute from "../middleware/authorization.js";
import {
  createFootballer,
  getFootballerById,
} from "../controllers/footballerController.js";
import { RoleEnum } from "../utils/enum.js";
const router = express.Router();

router.post("/create", protectRoute([RoleEnum.ADMIN]), createFootballer);
router.get("/:id", protectRoute([RoleEnum.ADMIN, RoleEnum.USER]), getFootballerById);

export default router;
