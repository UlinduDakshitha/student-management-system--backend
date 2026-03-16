const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");
const auth = require("../middleware/authMiddleware");


router.post("/students", auth, studentController.createStudent);
router.get("/students", auth, studentController.getStudents);
router.get("/students/:id", auth, studentController.getStudent);
router.put("/students/:id", auth, studentController.updateStudent);
router.delete("/students/:id", auth, studentController.deleteStudent);

module.exports = router;