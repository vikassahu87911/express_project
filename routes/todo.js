const express = require('express');
const router = express.Router();
const Todo = require('../model/todo');

const { getAllTodos,gettodoById,addTodo,updatetodobyId,deleteTodoById } = require('../controllers/todocontrol');



// to get all the todos, we can create a GET endpoint at /todos

// router.get('/todos', (req, res) => {
//   res.status(200).json(todos);
// });

router.get('/todos',getAllTodos);



// access a specific todo by its id, we can create a GET endpoint at /todos/:id

// router.get('/todos/:id', (req, res) => {
//     const todoId = Number(req.params.id);
//     const todo = todos.find(t => t.id === todoId);
//     if (todo) {
//         res.status(200).json(todo);
//     } else {
//         res.status(404).json({ message: 'Todo not found' });
//     }
// });

router.get('/todos/:id',gettodoById);

// to create a new todo, we can create a POST endpoint at /todos

// router.post('/todos', (req, res) => {
//     const newTodo = {
//         id: todos.length + 1,
//         task: req.body.task,
//         completed: false
//     };
//     todos.push(newTodo);
//     res.status(201).json({
//         message: 'Todo created successfully',
//         addedTodo: newTodo
//     });
// });

router.post('/todos', addTodo);

// to update a todo, whether it is completed or not PUT endpoint at /todos/:id

// router.put('/todos/:id', (req, res) => {
//     const todoId = Number(req.params.id);
//     const todo = todos.find(t => t.id === todoId);
//     if (todo) {
//         todo.completed = req.body.completed;
//         res.status(200).json(todo);
//     } else {
//         res.status(404).json({ message: 'Todo not found' });
//     }
// });

router.put('/todos/:id', updatetodobyId);

// to delete a todo, only when it is completed true, we can create a DELETE endpoint at /todos/:id

// router.delete('/todos/:id', (req, res) => {
//     const todoId = Number(req.params.id);
//     const todoIndex = todos.findIndex(t => t.id === todoId);    
//     if (todoIndex !== -1) {
//         if (todos[todoIndex].completed) {
//             todos.splice(todoIndex, 1);
//             res.status(200).json({ message: 'Todo deleted successfully' });
//         } else {
//             res.status(400).json({ message: 'Cannot delete an incomplete todo' });
//         }
//     } else {
//         res.status(404).json({ message: 'Todo not found' });
//     }
// });

router.delete('/todos/:id', deleteTodoById);

module.exports = router;