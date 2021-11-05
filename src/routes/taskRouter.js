const express = require("express");
const controller = require("../controllers/taskController");

const router = express.Router();

router.post("/create", controller.createTask);
router.get("/get", controller.getManyTasks);
router.get("/get/:id", controller.getTask);
router.put("/update/:id", controller.updateTask);
router.delete("/delete/:id", controller.deleteTask);

module.exports = router;
