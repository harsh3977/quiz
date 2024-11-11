// models/quizModel.ts

export interface Question {
    id: string; // UUID
    text: string;
    options: string[];
    correct_option: number;
  }
  
  export interface Answer {
    question_id: string;
    selected_option: number;
    is_correct: boolean;
  }
  
  export interface Result {
    quiz_id: string;
    user_id: string;
    score: number;
    answers: Answer[];
  }
  
  export interface Quiz {
    id: string; // UUID
    title: string;
    questions: Question[];
  }
  