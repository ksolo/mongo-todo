import dotenv from "dotenv"
import mongoose from "mongoose"
import ToDo from "./models/todo"

dotenv.config()
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true})

export async function createToDo(task, dueDate=Date.now()) {
  const todo = await ToDo.create({task, dueDate, complete: false});
  return todo;
}

export async function findLast() {
  const todo = await ToDo.findOne();
  return todo;
}
