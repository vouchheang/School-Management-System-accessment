import express from "express";
import {
  createStudent,
  updatestudent,
  deleteStudent,
  GetStudent,
} from "../controllers/studentController.js";

const router = express.Router();

router.post("/create", createStudent);
router.put("/update/:id", updatestudent);
router.delete("/delete/:id", deleteStudent);
router.get("/all", GetStudent);

export default router;
