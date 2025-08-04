# Node.js Backend Guide

This repository serves as a comprehensive guide and practice project for building robust and scalable backend applications using Node.js. It demonstrates best practices, common patterns, and essential components for a production-ready Node.js API.

## Features

- **User Management**: CRUD operations for users with authentication.
- **Task Management**: CRUD operations for tasks associated with users.
- **Authentication**: JWT-based authentication.
- **Database Integration**: MongoDB with Mongoose ODM.
- **API Documentation**: Swagger/OpenAPI for interactive API exploration.
- **Error Handling**: Centralized error handling middleware.
- **Configuration Management**: Environment-based configuration.
- **Testing**: Unit and integration tests.

## Technologies Used

- Node.js
- Express.js
- MongoDB (via Mongoose)
- JWT (JSON Web Tokens)
- Joi (for validation)
- Swagger-UI-Express
- Dotenv
- Bcrypt.js
- Jest (for testing)

## Project Structure

```
.env
.gitignore
README.md
package-lock.json
package.json
src/
├── app.js
├── config/
│   ├── database.js
│   └── swagger.js
├── controllers/
│   ├── task.controller.js
│   └── user.controller.js
├── middlewares/
├── models/
│   ├── task.model.js
│   └── user.model.js
├── routes/
│   ├── task.routes.js
│   └── user.routes.js
├── server.js
├── services/
└── utils/
tests/
```

## Setup and Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Basim47/backend-practice.git
    cd node-backend-guide
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Variables:**
    Create a `.env` file in the root directory and add the following:
    ```
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/node_backend_db
    JWT_SECRET=your_jwt_secret_key
    ```

4.  **Run the application:**
    ```bash
    npm start
    ```
    The API will be running at `http://localhost:3000`.

5.  **Access API Documentation:**
    Visit `http://localhost:3000/api-docs` in your browser.

## Running Tests

```bash
npm test
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.