import express from "express";
const router = express.Router();
import * as studentController from "../controllers/studentController";

router
  .route("/")
  .get(studentController.getAllStudent)
  .post(studentController.createStudent);

router
  .route("/:studentId")
  .get(studentController.getStudent)
  .patch(studentController.updateStudent)
  .delete(studentController.deleteStudent);

export default router;
