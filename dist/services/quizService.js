"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizService = void 0;
const quizzes = [];
const userAnswers = {};
let quizIdCounter = 1;
class QuizService {
    // Create a new quiz and return the quiz ID
    static createQuiz(quiz) {
        quiz.id = (quizIdCounter++).toString();
        quizzes.push(quiz);
        return quiz.id;
    }
    // Get a quiz by ID
    static getQuizById(quizId) {
        return quizzes.find(quiz => quiz.id === quizId);
    }
    // Submit an answer for a question in the quiz
    static submitAnswer(quizId, userId, questionId, selectedOption) {
        const quiz = quizzes.find(q => q.id === String(quizId));
        if (!quiz)
            throw new Error('Quiz not found');
        const question = quiz.questions.find(q => q.id === String(questionId));
        if (!question)
            throw new Error('Question not found');
        const isCorrect = selectedOption === question.correct_option;
        const answer = { question_id: questionId, selected_option: selectedOption, is_correct: isCorrect };
        // Store the answer for the user
        if (!userAnswers[userId]) {
            userAnswers[userId] = [];
        }
        userAnswers[userId].push(answer);
        return answer;
    }
    // Get the user's results for a specific quiz
    static getResults(quizId, userId) {
        const quiz = quizzes.find(q => q.id === quizId);
        if (!quiz)
            throw new Error('Quiz not found');
        const answers = userAnswers[userId] || [];
        const score = answers.filter(answer => answer.is_correct).length;
        return {
            quiz_id: quizId,
            user_id: userId,
            score,
            answers,
        };
    }
}
exports.QuizService = QuizService;
