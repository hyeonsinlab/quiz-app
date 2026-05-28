export type QuizQuestion = {
  id: number;
  question: string;
  answer: string;
  choices: string[];
  explanation?: string;
};