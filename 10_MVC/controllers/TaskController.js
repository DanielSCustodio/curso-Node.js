const TaskModel = require("../models/TaskModel");

module.exports = class TaskController {
  static createTask(_req, res) {
    res.render("tasks/create");
  }
};
