// const Todo = require('../models/todo')

// const addNewTodo = async ctx => {
//   const todo = ctx.body
//   try {
//     const savedTodo = await Todo.create(todo)
//     ctx.res.send(savedTodo)
//   } catch (err) {
//     ctx.res.status(500).send(err)
//   }
// }
// const fetchTodos = async ctx => {
//   try {
//     const todos = await Todo.find()
//     ctx.res.send(todos)
//   } catch (err) {
//     ctx.res.status(500).send(err)
//   }
// }
// const removeTodo = async ctx => {
//   const { id } = ctx.params
//   try {
//     const todos = await Todo.deleteOne({ _id: id })
//     if (todos.deletedCount) {
//       ctx.res.send({ _id: id })
//     } else {
//       ctx.res.status(500).send({ error: 'Todo not deleted' })
//     }
//   } catch (err) {
//     ctx.res.status(500).send(err)
//   }
// }
// const editTodo = async ctx => {
//   const todo = ctx.body
//   const { id } = ctx.params
//   try {
//     const updatedTodo = await Todo.findByIdAndUpdate(
//       { _id: id }, todo, {new: true })
//     console.log('todo', updatedTodo)
//     ctx.res.send(updatedTodo)
//   } catch (err) {
//     console.log('error todo', err)
//     ctx.res.status(500).send(err)
//   }
// }

// module.exports = {
//   addNewTodo,
//   fetchTodos,
//   removeTodo,
//   editTodo
// }