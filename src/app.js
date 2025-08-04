const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const swaggerConfig = require('./config/swagger');
const  connectDB  = require('./config/database');
require('dotenv').config();
// Middleware
app.use(express.json());


// Connect to database when starting the server
connectDB().then((db) => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });

  // Example route using the database
  app.get('/data', async (req, res) => {
    const tasksCol = db.collection('tasks');
    const userCol = db.collection('user');
    const data = await tasksCol.find({}).toArray();
    const userData = await userCol.find({}).toArray();
    res.json({
      tasks: data,
      user: userData,
    });
  });
});

// Swagger
swaggerConfig(app);
// Routes
app.use('/api/tasks', require('./routes/task.routes'));
app.use('/api/users', require('./routes/user.routes'));

module.exports = app;