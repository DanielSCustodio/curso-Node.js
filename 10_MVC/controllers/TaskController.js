const TaskModel = require("../models/TaskModel");

module.exports = class TaskController {
  static createTask(_req, res) {
    res.render("tasks/create");
  }

  static async showTasks(_req, res) {
    const tasks = await TaskModel.findAll({ raw: true });
    res.render("tasks/all", { tasks });
  }

  static async createTaskSave(req, res) {
    const task = {
      title: req.body.title,
      description: req.body.description,
      done: false,
    };

    await TaskModel.create(task);
    res.redirect("/tasks");
  }

  static async removeTask(req, res) {
    const { id } = req.body;
    await TaskModel.destroy({ where: { id: id } });
    res.redirect("/tasks");

  }
};
