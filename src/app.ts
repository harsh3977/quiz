import express, { Application } from "express";
import bodyParser from "body-parser";
import quizRoutes from "./routes/quizRoutes";
import { swaggerSpec, swaggerUi } from './swagger'; 
import YAML from 'yamljs';

const app: Application = express();
const swaggerDocument = YAML.load('quiz.yml');  

// Middleware
app.use(bodyParser.json());

// app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use("/api", quizRoutes);


// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
