import { Router } from 'express'

import * as TaskController from '../controllers/taskcontroller'

const router = Router()

// Rutas para los métodos básicos //
router.get('/', TaskController.findAllTasks)
router.post('/', TaskController.createTask)
router.get('/done', TaskController.findAllDoneTasks)
router.get('/:id', TaskController.findOneTask)
router.delete('/:id', TaskController.deleteTask)
router.put('/:id', TaskController.updateTask)



export default router