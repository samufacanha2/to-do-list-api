const Task = require("../models/taskModel");

module.exports = {
  createTask: async (req, res) => {
    const task = req.body;
    try {
      const createTask = await Task.create(task);
      return res.send(createTask);
    } catch (err) {
      console.error(err);
      return res.status(400).send({ error: "Failed to create task" });
    }
  },
  getManyTasks: async (req, res) => {
    try {
      const taskMany = await Task.find();
      return res.send(taskMany);
    } catch (error) {
      console.error(error);
      return res.status(400).send({ error: "Failed to get Tasks" });
    }
  },
  getTask: async (req, res) => {
    const { id } = req.params;
    try {
      const task = await Task.findById(id);
      return res.send(task);
    } catch (error) {
      console.error(error);
      return res.status(400).send({ error: "Failed to get Task" });
    }
  },
  updateTask: async (req, res) => {
    const { id } = req.params;
    try {
      const task = await Task.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      return res.send(task);
    } catch (error) {
      console.error(error);
      return res.status(400).send({ error: "Failed to get Task" });
    }
  },
  deleteTask: async (req, res) => {
    const { id } = req.params;
    try {
      const task = await Task.findByIdAndDelete(id);
      if (!task) {
        return res.status(400).send({ error: "Task not found" });
      }
      return res.send("Task deleted");
    } catch (error) {
      console.error(error);
      return res.status(400).send({ error: "Failed to delete Task, check id" });
    }
  },
};
