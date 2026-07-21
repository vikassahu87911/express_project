// import model

const Todo = require('../model/todo');

// import dto

const tododto = require('../dto/tododto');

exports.getAllTodos = async (req, res) => {
    
        const todos = await Todo.find();
        if (!todos|| todos.length === 0) {
            return res.status(404).json({ 
                success: false,
                message: 'No todos found' });
        } 
        res.status(200).json({
            success: true,
            message: 'Todos retrieved successfully',
            data: todos
        });

    }

exports.gettodoById = async (req, res) => {
    const todoId = req.params.id;
    const todo = await Todo.findById(todoId);
    if (!todo) {
        return res.status(404).json({
            success: false,
            message: 'Todo not found'
        });
    }
    res.status(200).json({
        success: true,
        message: 'Todo retrieved successfully',
        data: todo
    });
}

exports.addTodo = async (req, res) => {
    const newTodo = tododto(req.body);
    if (!newTodo || Object.keys(newTodo).length === 0) {
        return res.status(400).json({
            success: false,
            message: 'Invalid todo data'
        });
    }
    const todo = await Todo.create(newTodo);
    res.status(201).json({
        success: true,
        message: 'Todo created successfully',
        data: todo
    });
}

exports.updatetodobyId = async (req, res) => {
    const todoId = req.params.id;
    const data = req.body;
    if(!data || Object.keys(data).length === 0){
        return res.status(400).json({
            success: false,
            message: "data is required for update"
        })
    }

    const todo = await Todo.findByIdAndUpdate(todoId, data, { new: true });
    
    res.status(200).json({
        success: true,
        message: 'Todo updated successfully',
        data: todo
    });
}

// delete a todo by its id, only when it is completed true, we can create a DELETE endpoint at /todos/:id

exports.deleteTodoById = async (req, res) => {
    const todoId = req.params.id;
    const todo = await Todo.findById(todoId);
    if (!todo) {
        return res.status(404).json({
            success: false,
            message: 'Todo not found'
        });
    }

    await Todo.findByIdAndDelete(todoId);
    res.status(200).json({
        success: true,
        message: 'Todo deleted successfully'
    });
}





