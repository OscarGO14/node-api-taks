// Imports
import express from 'express'
import TaskRoutes from './routes/taskroutes'

const app = express()

// Settings
app.set('port', process.env.PORT || 3000)

// Middlewares
app.use(express.json())

// Database
import './database'

//Routes
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to my aplication' })
})
app.use('/api/tasks', TaskRoutes)

// Server running
app.listen(app.get('port'), () =>

    console.log('Server on localhost:', app.get('port'))
)