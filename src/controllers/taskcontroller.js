import Task from '../models/Tasks'
import { getPagination } from '../libs/getPagination'

export const findAllTasks = async (req, res) => {
    try {
        const { size, page } = req.query
        const { limit, offset } = getPagination(page, size)

        // en vez del metodo find usamos el metodo paginate, para usar el plugin de mongoosePaginate
        const tasks = await Task.paginate({}, { offset, limit })
        res.json(tasks)
    } catch (error) {
        res.status(500).json({
            message: error.message || "Something went wrong retrieving the tasks"
        })
    }
}

export const createTask = async (req, res) => {

    try {
        const newTask = new Task({
            title: req.body.title,
            description: req.body.description
        })
        const taskSaved = await newTask.save()
        console.log(newTask)
        res.json(taskSaved)
    } catch {
        res.status(500).json({
            message: error.message || "Something went wrong creating the task"
        })
    }
}

export const findOneTask = async (req, res) => {
    try {
        let id = req.params.id
        const task = await Task.findById(id)
        res.json(task)
    } catch {
        res.status(500).json({
            message: error.message || "Something went wrong retrieving the task"
        })
    }
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
    res.json({ 'message': 'La tarea ha sido actualizada', task })
}