const { Router } = require("express");
const TaskController = require("../controllers/TaskController");

const router = Router();

router.get("/add", TaskController.createTask);
router.get("/", TaskController.showTasks);

module.exports = router;
