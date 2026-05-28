import QuizEngine from "@/components/QuizEngine";
import { spellingQuizData } from "@/data/spellingQuiz";

export default function SpellingQuizPage() {
  return (
    <QuizEngine
      title="맞춤법 퀴즈"
      description="헷갈리는 맞춤법을 맞혀보세요."
      quizzes={spellingQuizData}
      timeLimit={10}
    />
  );
}