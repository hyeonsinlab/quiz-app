import QuizEngine from "@/components/QuizEngine";
import { englishQuizData } from "@/data/englishQuiz";

export default function EnglishQuizPage() {
  return (
    <QuizEngine
      title="영어 단어 퀴즈"
      description="영어 단어의 뜻을 맞혀보세요."
      quizzes={englishQuizData}
      timeLimit={7}
    />
  );
}