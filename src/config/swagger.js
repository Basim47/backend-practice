const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Task Manager API',
      version: '1.0.0',
      description: 'A simple Task Management API',
    },
    servers: [
      {
        url: 'http://localhost:3000/',
      },
    ],
    components: {
      schemas: {
        User: {
          type: 'object',
          required: ['fullname', 'username', 'email', 'phone', 'password', 'termsAndConditions'],
          properties: {
            id: {
              type: 'string',
              description: 'The auto-generated id of the user',
            },
            fullname: {
              type: 'string',
              description: 'The full name of the user',
            },
            username: {
              type: 'string',
              description: 'The username for login',
            },
            email: {
              type: 'string',
              description: 'The email address of the user',
            },
            phone: {
              type: 'string',
              description: 'The phone number of the user',
            },
            password: {
              type: 'string',
              description: 'The hashed password of the user',
            },
            termsAndConditions: {
              type: 'boolean',
              description: 'Agreement to terms and conditions',
            },
          },
          example: {
            id: '60d0fe4f5311236168a109ca',
            fullname: 'John Doe',
            username: 'johndoe',
            email: 'john.doe@example.com',
            phone: '123-456-7890',
            password: 'hashedpassword123',
            termsAndConditions: true,
          },
        },
      },
    },
  },
  apis: ['./src/routes/*.js'], // files containing annotations
};

const specs = swaggerJsdoc(options);

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};