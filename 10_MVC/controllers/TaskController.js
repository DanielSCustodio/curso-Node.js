const TaskModel = require("../models/TaskModel");

module.exports = class TaskController {
  static createTask(_req, res) {
    res.render("tasks/create");
  }

  static showTasks(_req, res) {
    res.render("tasks/all");
  }

  static async createTaskSave(req, res) {
    const task = {
      title: req.body.title,
      description: req.body.description,
      done: false,
    };

    TaskModel.create(task);
    res.redirect("/tasks");
  }
};
