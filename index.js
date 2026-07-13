const express = require('express');
const app = express();
const port = 8129;

app.use(express.json());

let todos = [
  { id: 1, task: 'Buy groceries', completed: false },
  { id: 2, task: 'Clean the house', completed: true },
  { id: 3, task: 'Finish coding project', completed: false }
];

// print hello world to the console

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// to get all the todos, we can create a GET endpoint at /todos

app.get('/todos', (req, res) => {
  res.status(200).json(todos);
});

// access a specific todo by its id, we can create a GET endpoint at /todos/:id

app.get('/todos/:id', (req, res) => {
    const todoId = Number(req.params.id);
    const todo = todos.find(t => t.id === todoId);
    if (todo) {
        res.status(200).json({
            message: 'Todo found',
            data: todo
        });
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
});

// to create a new todo, we can create a POST endpoint at /todos

app.post('/todos', (req, res) => {
    const newTodo = {
        id: todos.length + 1,
        task: req.body.task,
        completed: false
    };
    todos.push(newTodo);
    res.status(201).json({
        message: 'Todo created successfully',
        addedTodo: newTodo
    });
});

// to update a todo, whether it is completed or not PUT endpoint at /todos/:id

app.put('/todos/:id', (req, res) => {
    const todoId = Number(req.params.id);
    const todo = todos.find(t => t.id === todoId);
    if (todo) {
        todo.completed = req.body.completed;
        res.status(200).json({
            message: 'Todo updated successfully',
            updatedTodo: todo
        });
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
});

// to delete a todo, only when it is completed true, we can create a DELETE endpoint at /todos/:id

app.delete('/todos/:id', (req, res) => {
    const todoId = Number(req.params.id);
    const todoIndex = todos.findIndex(t => t.id === todoId);    
    if (todoIndex !== -1) {
        if (todos[todoIndex].completed) {
            todos.splice(todoIndex, 1);
            res.status(200).json({ message: 'Todo deleted successfully' });
        } else {
            res.status(400).json({ message: 'Cannot delete an incomplete todo' });
        }
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});