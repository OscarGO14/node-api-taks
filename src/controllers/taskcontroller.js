import Task from '../models/Tasks'

export const findAllTasks = async (req, res) => {
    const tasks = await Task.find()
    res.json(tasks)
}

export const createTask = async (req, res) => {
    const newTask = new Task({
        title: req.body.title,
        description: req.body.description
    })
    const taskSaved = await newTask.save()
    console.log(newTask)
    res.json(taskSaved)
}

export const findOneTask = async (req, res) => {
    let id = req.params.id
    const task = await Task.findById(id)
    res.json(task)
}
export const deleteTask = async (req, res) => {

    await Task.findByIdAndDelete(req.params.id)
    res.json({ message: "Task were deleted successfully" })
}

export const findAllDoneTasks = async (req, res) => {
    const tasks = await Task.find({ done: true })
    res.json(tasks)
}

export const updateTask = async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body)
    res.json({ 'message': 'La tarea ha sido actualizada' })
}