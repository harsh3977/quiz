import { Router } from "express";
import { createQuiz, getQuiz, submitAnswer, getResults } from "../controllers/quizController";

const router = Router();
// Define route handlers
router.post("/quiz", createQuiz);                    // Route for creating quiz
router.get("/quiz/:quizId", getQuiz);                // Route for getting a specific quiz
router.post("/quiz/answer", submitAnswer);          // Route for submitting an answer
router.get("/quiz/:quizId/results/:userId", getResults); // Route for getting results

export default router;
