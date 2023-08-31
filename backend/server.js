const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection
mongoose.connect('mongodb://localhost/todo-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Create a schema for tasks
const taskSchema = new mongoose.Schema({
    text: String,
    completed: Boolean,
});

const Task = mongoose.model('Task', taskSchema);

app.use(bodyParser.json());

// POST a new task
app.post('/api/tasks', async (req, res) => {
    try {
        const { text, completed } = req.body;
        const newTask = new Task({ text, completed });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ error: 'Could not create task.' });
    }
});

// GET all tasks
app.get('/api/tasks', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'Could not retrieve tasks.' });
    }
});

// PUT/update a task by ID
app.put('/api/tasks/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { text, completed } = req.body;

        const updatedTask = await Task.findByIdAndUpdate(id, { text, completed }, { new: true });

        if (!updatedTask) {
            return res.status(404).json({ error: 'Task not found.' });
        }

        res.json(updatedTask);
    } catch (error) {
        res.status(500).json({ error: 'Could not update task.' });
    }
});

// DELETE a task by ID
app.delete('/api/tasks/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const deletedTask = await Task.findByIdAndDelete(id);

        if (!deletedTask) {
            return res.status(404).json({ error: 'Task not found.' });
        }

        res.json({ message: 'Task deleted successfully.' });
    } catch (error) {
        res.status(500).json({ error: 'Could not delete task.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});