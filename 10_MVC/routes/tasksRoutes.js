const { Router } = require("express");
const TaskController = require("../controllers/TaskController");

const router = Router();

router.get("/add", TaskController.createTask); // Renderizar view
router.get("/", TaskController.showTasks); // Renderizar view

router.post("/add", TaskController.createTaskSave);
router.post("/remove", TaskController.removeTask);

module.exports = router;
