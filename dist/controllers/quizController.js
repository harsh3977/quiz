"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResults = exports.submitAnswer = exports.getQuiz = exports.createQuiz = void 0;
const quizService_1 = require("../services/quizService");
// Create Quiz
const createQuiz = (req, res) => {
    try {
        const quiz = req.body;
        const quizId = quizService_1.QuizService.createQuiz(quiz);
        res.status(201).json({ id: quizId });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
        else {
            // If it's not an instance of Error, handle it as an unknown error
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
};
exports.createQuiz = createQuiz;
// Get Quiz
const getQuiz = (req, res) => {
    const quizId = req.params.quizId;
    // Assume you have a service or logic to fetch the quiz by ID
    const quiz = quizService_1.QuizService.getQuizById(quizId);
    if (!quiz) {
        res.status(404).json({ message: 'Quiz not found' });
        return;
    }
    res.json(quiz);
};
exports.getQuiz = getQuiz;
// Submit Answer
const submitAnswer = (req, res) => {
    const { quizId, userId, questionId, selectedOption } = req.body;
    try {
        const answer = quizService_1.QuizService.submitAnswer(quizId, userId, questionId, selectedOption);
        res.status(200).json(answer);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
        else {
            // If it's not an instance of Error, handle it as an unknown error
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
};
exports.submitAnswer = submitAnswer;
// Get Results
const getResults = (req, res) => {
    const { quizId, userId } = req.params;
    try {
        const result = quizService_1.QuizService.getResults(quizId, userId);
        if (!result) {
            // Just send the response, no need to return the res object.
            res.status(404).json({ message: "Results not found" });
            return;
        }
        // Send the results as JSON
        res.json(result);
    }
    catch (error) {
        // Check if error is an instance of Error
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
        else {
            // Generic error handling for unknown error types
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
};
exports.getResults = getResults;
