"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const quizController_1 = require("../controllers/quizController");
const router = (0, express_1.Router)();
// Define route handlers
router.post("/quiz", quizController_1.createQuiz); // Route for creating quiz
router.get("/quiz/:quizId", quizController_1.getQuiz); // Route for getting a specific quiz
router.post("/quiz/answer", quizController_1.submitAnswer); // Route for submitting an answer
router.get("/quiz/:quizId/results/:userId", quizController_1.getResults); // Route for getting results
exports.default = router;
