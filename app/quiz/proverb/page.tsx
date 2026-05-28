import QuizEngine from "@/components/QuizEngine";
import { proverbQuizData } from "@/data/proverbQuiz";

export default function ProverbQuizPage() {
  return (
    <QuizEngine
      title="속담 퀴즈"
      description="빈칸에 들어갈 속담을 맞혀보세요."
      quizzes={proverbQuizData}
      timeLimit={7}
    />
  );
}