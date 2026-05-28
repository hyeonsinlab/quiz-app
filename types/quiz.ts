export type QuizQuestion = {
  id: number | string;
  question: string;
  answer: string;
  choices: string[];
  explanation?: string;

  year?: number;
  source?: string;
  category?: string;
  difficulty?: "easy" | "medium" | "hard";
};