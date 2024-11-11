Quiz App Backend
This is a RESTful API for a quiz application that allows users to answer multiple-choice questions and receive feedback on their performance. The app supports functionality to create quizzes, submit answers, and get results.

Table of Contents
Requirements
Setup and Running the Service
Docker Setup
Running Without Docker
Known Issues and Limitations
Running Tests
Requirements
Node.js (v16 or above)
Docker (for containerized deployment)
npm (or yarn)
Setup and Running the Service
Docker Setup
To run the app using Docker, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/your-repo/quiz-app-backend.git
cd quiz-app-backend
Build the Docker image:

bash
Copy code
docker-compose build
Start the app using Docker Compose:

bash
Copy code
docker-compose up
This will start the backend service on http://localhost:3000. The app will be running within a container, and you can interact with the API.

Access the app: Open your browser or an API testing tool (e.g., Postman) and test the following endpoints:

POST /api/quiz – Create a new quiz.
GET /api/quiz/:id – Fetch a quiz by its ID.
POST /api/quiz/answer – Submit an answer for a specific question.
GET /api/quiz/:quiz_id/:user_id – Get the results for a specific quiz.
Running Without Docker
If you prefer to run the service without Docker, follow these steps:

Install dependencies:

npm install

Start the app:
npm start

The app will start on http://localhost:3000.

Test the endpoints using your browser or an API testing tool (e.g., Postman).

# quiz
