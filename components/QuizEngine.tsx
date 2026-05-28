"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { QuizQuestion } from "@/types/quiz";

type QuizEngineProps = {
  title: string;
  description: string;
  quizzes: QuizQuestion[];
  timeLimit?: number;
};

const QUIZ_COUNT = 10;

function shuffleArray<T>(array: T[]) {
  return [...array].sort(() => Math.random() - 0.5);
}

function getGrade(score: number, total: number) {
  const percent = (score / total) * 100;

  if (percent === 100) return "완벽해요! 🏆";
  if (percent >= 80) return "아주 잘했어요! 👏";
  if (percent >= 60) return "좋아요! 조금만 더! 🙂";
  if (percent >= 40) return "괜찮아요! 다시 도전! 💪";
  return "연습이 더 필요해요! 🔥";
}

export default function QuizEngine({
  title,
  description,
  quizzes,
  timeLimit = 15,
}: QuizEngineProps) {
  const [shuffledQuizzes, setShuffledQuizzes] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(timeLimit);

  const startQuiz = () => {
    const randomQuizzes = shuffleArray(quizzes).slice(0, QUIZ_COUNT);

    setShuffledQuizzes(randomQuizzes);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setIsFinished(false);
    setTimeLeft(timeLimit);
  };

  useEffect(() => {
    startQuiz();
  }, [quizzes, timeLimit]);

  useEffect(() => {
    if (selectedAnswer || isFinished || shuffledQuizzes.length === 0) return;

    if (timeLeft <= 0) {
      setSelectedAnswer("시간 초과");
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, selectedAnswer, isFinished, shuffledQuizzes.length]);

  const currentQuiz = shuffledQuizzes[currentIndex];

  if (!currentQuiz) {
    return null;
  }

  const isCorrect = selectedAnswer === currentQuiz.answer;
  const progress = ((currentIndex + 1) / shuffledQuizzes.length) * 100;

  const handleSelect = (choice: string) => {
    if (selectedAnswer) return;

    setSelectedAnswer(choice);

    if (choice === currentQuiz.answer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex === shuffledQuizzes.length - 1) {
      setIsFinished(true);
      return;
    }

    setCurrentIndex((prev) => prev + 1);
    setSelectedAnswer(null);
    setTimeLeft(timeLimit);
  };

  if (isFinished) {
    return (
      <main className="min-h-dvh bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-3 sm:p-6">
        <section className="mx-auto flex min-h-dvh max-w-md items-center">
          <div className="w-full rounded-[1.5rem] bg-white/95 p-6 shadow-2xl sm:rounded-[2rem] sm:p-8">
            <div className="text-6xl">🎉</div>

            <h1 className="mt-4 text-3xl font-black text-gray-900">
              {title} 결과
            </h1>

            <p className="mt-5 text-xl font-semibold text-gray-700">
              총 {shuffledQuizzes.length}문제 중{" "}
              <span className="text-indigo-600">{score}</span>문제를 맞혔어요.
            </p>

            <p className="mt-3 rounded-2xl bg-indigo-50 p-4 text-lg font-bold text-indigo-700">
              {getGrade(score, shuffledQuizzes.length)}
            </p>

            <div className="mt-8 space-y-3">
              <button
                onClick={startQuiz}
                className="w-full rounded-2xl bg-gray-900 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-black hover:shadow-xl active:translate-y-0"
              >
                다시 풀기
              </button>

              <Link
                href="/"
                className="block w-full rounded-2xl border-2 border-gray-200 py-4 text-center font-bold text-gray-700 transition hover:-translate-y-1 hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-700"
              >
                메인으로 가기
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-dvh bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-3 sm:p-6">
      <section className="mx-auto flex min-h-dvh max-w-md items-center">
        <div className="w-full rounded-[1.5rem] bg-white/95 p-4 shadow-2xl backdrop-blur sm:rounded-[2rem] sm:p-7">
          <div className="mb-3 flex items-start justify-between gap-3 sm:mb-6">
            <div>
              <span className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold text-indigo-700 sm:text-sm">
                QUIZ
              </span>

              <h1 className="mt-2 text-2xl font-black text-gray-900 sm:mt-3 sm:text-3xl">
                {title}
              </h1>

              <p className="mt-1 text-xs text-gray-500 sm:mt-2 sm:text-sm">
                {description}
              </p>
            </div>

            <Link
            href="/"
              className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-3 text-sm font-black text-white shadow-lg transition active:scale-95 sm:text-base"
            >
            <span className="text-lg">🏠</span>
              홈으로
            </Link>
          </div>

          <div className="mb-3 sm:mb-5">
            <div className="mb-2 flex justify-between text-xs font-bold text-gray-500 sm:text-sm">
              <span>
                {currentIndex + 1} / {shuffledQuizzes.length}
              </span>

              <span className={timeLeft <= 5 ? "text-red-500" : "text-indigo-600"}>
                ⏱ {timeLeft}초
              </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-gray-200 sm:h-3">
              <div
                className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="mb-4 rounded-2xl bg-gray-900 p-4 text-white shadow-lg sm:mb-6 sm:rounded-3xl sm:p-6">
            <p className="mb-1 text-xs font-bold text-indigo-200 sm:mb-2 sm:text-sm">
              문제 {currentIndex + 1}
            </p>

            <h2 className="text-lg font-black leading-snug sm:text-2xl">
              {currentQuiz.question}
            </h2>
          </div>

          <div className="space-y-2 sm:space-y-3">
            {currentQuiz.choices.map((choice, index) => {
              const isSelected = selectedAnswer === choice;
              const isAnswer = currentQuiz.answer === choice;

              let buttonClass =
                "group w-full rounded-xl border-2 p-3 text-left text-sm font-bold shadow-sm transition duration-200 sm:rounded-2xl sm:p-4 sm:text-base";

              if (selectedAnswer) {
                if (isAnswer) {
                  buttonClass +=
                    " border-green-500 bg-green-100 text-green-800 shadow-green-100";
                } else if (isSelected) {
                  buttonClass +=
                    " border-red-500 bg-red-100 text-red-800 shadow-red-100";
                } else {
                  buttonClass += " border-gray-100 bg-gray-50 text-gray-400";
                }
              } else {
                buttonClass +=
                  " border-gray-200 bg-white text-gray-800 hover:-translate-y-1 hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-700 hover:shadow-lg active:translate-y-0";
              }

              return (
                <button
                  key={choice}
                  onClick={() => handleSelect(choice)}
                  className={buttonClass}
                >
                  <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-xs transition group-hover:bg-indigo-600 group-hover:text-white sm:mr-3 sm:h-8 sm:w-8 sm:text-sm">
                    {index + 1}
                  </span>
                  {choice}
                </button>
              );
            })}
          </div>

          {selectedAnswer && (
            <div className="mt-3 rounded-2xl bg-gray-50 p-4 sm:mt-6 sm:rounded-3xl sm:p-5">
              <p
                className={
                  isCorrect
                    ? "text-base font-black text-green-600 sm:text-lg"
                    : "text-base font-black text-red-600 sm:text-lg"
                }
              >
                {isCorrect ? "정답이에요! 🎯" : "아쉬워요! 😭"}
              </p>

              {currentQuiz.explanation && (
                <p className="mt-1 text-xs font-medium text-gray-600 sm:mt-2 sm:text-sm">
                  {currentQuiz.explanation}
                </p>
              )}

              <button
                onClick={handleNext}
                className="mt-3 w-full rounded-xl bg-gray-900 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-black hover:shadow-xl active:translate-y-0 sm:mt-5 sm:rounded-2xl sm:py-4 sm:text-base"
              >
                {currentIndex === shuffledQuizzes.length - 1
                  ? "결과 보기"
                  : "다음 문제"}
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}