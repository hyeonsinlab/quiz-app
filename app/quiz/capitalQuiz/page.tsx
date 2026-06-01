import QuizEngine from "@/components/QuizEngine";
import { capitalQuizData } from "@/data/capitalQuiz";

export default function CapitalQuizPage() {
  return (
    <QuizEngine
      title="수도 퀴즈"
      description="국가의 수도를 맞혀보세요."
      quizzes={capitalQuizData}
      timeLimit={10}
    />
  );
}