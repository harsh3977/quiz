import request from 'supertest';
import app from '../app'; 
describe('Quiz API', () => {
  let quizId: string;
  const userId: string = 'user123';
  const questionId: string = '1';

  // Test POST /quizzes to create a quiz
  it('should create a new quiz', async () => {
    const quizData = {
      title: 'New Quiz',
      questions: [
        {
          id: "1",
          question: 'What is 2 + 2?',
          options: ['3', '4', '5'],
          correctOption: 1,
        },
      ],
    };

    const response = await request(app)
      .post('/api/quiz')
      .send(quizData)
      .set('Accept', 'application/json');

    expect(response.status).toBe(201); // Check if the response status is 201
    expect(response.body.id).toBeDefined(); // Ensure id is returned
    quizId = response.body.id; // Save the quizId for the next test
  });

  // Test GET /quizzes/:quizId to get a quiz by ID
  it('should get the quiz by ID', async () => {
    const response = await request(app)
      .get(`/api/quiz/${quizId}`)
      .set('Accept', 'application/json');

    expect(response.status).toBe(200); // Check if the response status is 200
    expect(response.body.id).toBe(quizId); // Check if the returned quiz ID matches
    expect(response.body.title).toBe('New Quiz'); // Check the quiz title
  });

  // Test POST /quizzes/submit to submit an answer to a question
  it('should submit an answer to a question', async () => {
    const answerData = {
      quizId,
      userId,
      questionId,
      selectedOption: 0, // Selecting option 1 (which should be correct in this case)
    };

    const response = await request(app)
      .post('/api/quiz/answer')
      .send(answerData)
      .set('Accept', 'application/json');

      expect(response.status).toBe(200);

      // Check if the response body matches the expected structure
      expect(response.body.question_id).toBe(questionId);  // Check question_id
      expect(response.body.selected_option).toBe(0);  // Check the selected_option
      expect(response.body.is_correct).toBe(false);  // Check if the answer is incorrect
  });

  // Test GET /quizzes/:quizId/results/:userId to get the quiz results for a user
  it('should get the quiz results for a user', async () => {
    const response = await request(app)
      .get(`/api/quiz/${quizId}/results/${userId}`)
      .set('Accept', 'application/json');

    expect(response.status).toBe(200); // Check if the response status is 200
    expect(response.body.user_id).toBe(userId); // Check if the userId matches
    expect(response.body.quiz_id).toBe(quizId); // Check if the quizId matches
    expect(response.body.score).toBe(0); // Assuming the user answered correctly, score should be 1
  });
});
