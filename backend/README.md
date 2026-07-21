# Express Todo API

A simple Express.js CRUD API for managing todos with MongoDB and Mongoose.

## Project Structure

- `index.js` - Application entry point and Express server setup
- `connection/connection.js` - MongoDB connection logic
- `controllers/todocontrol.js` - Todo controller functions for each route
- `routes/todo.js` - Todo API route definitions
- `model/todo.js` - Mongoose Todo schema and model
- `dto/tododto.js` - Todo DTO helper for request payload validation

## Requirements

- Node.js
- npm
- MongoDB instance or MongoDB Atlas

## Installation

1. express.
2. nodemon.
3. mongoose.
4. dotenv.
- using terminal npm i <express>
```

3. Create a `.env` file in the project root with your MongoDB connection string:

```env
url=your_mongodb_connection_string
```

4. Start the server:

npm run dev

## Running

The server listens on port `8129` by default.

Open `http://localhost:8129` to confirm it is running.

## API Endpoints

- `GET /todos` - Get all todos
- `GET /todos/:id` - Get one todo by ID
- `POST /todos` - Create a new todo
- `PUT /todos/:id` - Update an existing todo by ID
- `DELETE /todos/:id` - Delete a todo by ID

## Request Body Example

`POST /todos`

```json
{
  "task": "Buy groceries",
  "completed": false
}
```

`PUT /todos/:id`

```json
{
  "task": "Buy groceries and cook dinner",
  "completed": true
}
```


## Notes

- The project uses `express.json()` to parse JSON request bodies.
- The MongoDB connection string is loaded from `process.env.url`.
- The todo model includes two fields: `task` (required string) and `completed` (boolean, default-false).
