import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

// Swagger definition
const swaggerDefinition = {
  openapi: '3.0.0',  // OpenAPI version
  info: {
    title: 'My API',  // API title
    version: '1.0.0',  // API version
    description: 'This is the API documentation for My API project',  // API description
    contact: {
      name: 'Your Name',
      email: 'your-email@example.com',
    },
  },
  servers: [
    {
      url: 'http://localhost:3000',  // Your API server URL (you can add more URLs if needed)
      description: 'Local development server',
    },
  ],
};

// Options for swagger-jsdoc
const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.ts'],  // Specify the location of your API routes files
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

// Exporting the swaggerSpec to use in the app
export { swaggerSpec, swaggerUi };
