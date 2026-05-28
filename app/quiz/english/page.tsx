import QuizEngine from "@/components/QuizEngine";
import { civilServiceVocab2023To2025 } from "@/data/civilServiceVocab2023_2025";

export default function EnglishQuizPage() {
  return (
    <QuizEngine
      title="영어 단어 퀴즈"
      description="2023~2025 기출 영단어를 맞혀봐요."
      quizzes={civilServiceVocab2023To2025}
      timeLimit={10}
    />
  );
}