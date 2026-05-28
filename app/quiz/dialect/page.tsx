import QuizEngine from "@/components/QuizEngine";
import { dialectQuizData } from "@/data/dialectQuiz";

export default function DialectQuizPage() {
  return (
    <QuizEngine
      title="사투리 퀴즈"
      description="지역별 사투리의 뜻을 맞혀보세요."
      quizzes={dialectQuizData}
      timeLimit={7}
    />
  );
}