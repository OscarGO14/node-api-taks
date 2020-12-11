import { Schema, model } from 'mongoose'

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
        // trim se encarga de reducir espacios innecesarios
    },
    description: {
        type: String,
        trim: true
    },
    done: Boolean,
},
    {
        versionKey: false,
        timestamps: true
    }
)


export default model('Task', taskSchema)