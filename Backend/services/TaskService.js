const Task = require('../models/Task');

const taskService = {
    getAll: async () => await Task.find().sort({ fecha: -1 }),

    create: async (taskData) => {
        const newTask = new Task(taskData);
        return await newTask.save();
    },

    update: async (id, updateData) => {
        return await Task.findByIdAndUpdate(id, updateData, { new: true });
    },

    delete: async (id) => {
        return await Task.findByIdAndDelete(id);
    }
};

module.exports = taskService;