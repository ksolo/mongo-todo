import mongoose, { Schema } from 'mongoose'

const todoSchema = new Schema({
  task: String,
  dueDate: Date,
  complete: Boolean,
})

export default mongoose.model('ToDo', todoSchema);
