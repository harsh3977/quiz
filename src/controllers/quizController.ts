import { Request, Response } from "express";
import { QuizService } from "../services/quizService";
import { Quiz } from "../models/quizModel";

// Create Quiz
export const createQuiz = (req: Request, res: Response) => {
  try {
    const quiz: Quiz = req.body;
    const quizId = QuizService.createQuiz(quiz);
     res.status(201).json({ id: quizId  });
  
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      // If it's not an instance of Error, handle it as an unknown error
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};

// Get Quiz
export const getQuiz = (req: Request, res: Response): void => {
  const quizId = req.params.quizId;
  
  // Assume you have a service or logic to fetch the quiz by ID
  const quiz = QuizService.getQuizById(quizId);

  if (!quiz) {
    res.status(404).json({ message: 'Quiz not found' });
    return;
  }

  res.json(quiz);
};
// Submit Answer
export const submitAnswer = (req: Request, res: Response) => {
  const { quizId, userId, questionId, selectedOption } = req.body;
  try {
    const answer = QuizService.submitAnswer(quizId, userId, questionId, selectedOption);
    res.status(200).json(answer);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      // If it's not an instance of Error, handle it as an unknown error
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};

// Get Results
export const getResults = (req: Request, res: Response): void => {
  const { quizId, userId } = req.params;

  try {
    const result = QuizService.getResults(quizId, userId);
    if (!result) {
      // Just send the response, no need to return the res object.
      res.status(404).json({ message: "Results not found" });
      return 
    }

    // Send the results as JSON
    res.json(result);
  } catch (error) {
    // Check if error is an instance of Error
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      // Generic error handling for unknown error types
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};
