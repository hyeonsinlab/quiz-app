import Link from "next/link";

const quizMenus = [
  {
    title: "사투리 퀴즈",
    description: "지역별 사투리의 뜻을 맞혀보세요.",
    href: "/quiz/dialect",
    icon: "🗣️",
    badge: "방언",
  },
  {
    title: "속담 퀴즈",
    description: "빈칸에 들어갈 속담을 맞혀보세요.",
    href: "/quiz/proverb",
    icon: "📜",
    badge: "상식",
  },
  {
    title: "영어 단어 퀴즈",
    description: "영어 단어 뜻을 맞혀보세요.",
    href: "/quiz/english",
    icon: "📘",
    badge: "영단어",
  },
  {
    title: "맞춤법 퀴즈",
    description: "헷갈리는 맞춤법에 도전하세요.",
    href: "/quiz/spelling",
    icon: "✍️",
    badge: "맞춤법",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-6">
      <section className="mx-auto max-w-5xl py-12">
        <div className="mb-8 rounded-[2rem] bg-white/95 p-8 shadow-2xl">
          <span className="inline-block rounded-full bg-indigo-100 px-4 py-1 text-sm font-bold text-indigo-700">
            QUIZ PLAYGROUND
          </span>

          <h1 className="mt-4 text-5xl font-black text-gray-900">
            이슬이네 QUIZ 놀이터
          </h1>

          <p className="mt-4 text-lg font-medium text-gray-500">
            원하는 퀴즈를 선택해서 문제를 풀어보세요.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {quizMenus.map((quiz) => (
            <Link
              key={quiz.href}
              href={quiz.href}
              className="group rounded-[2rem] bg-white/95 p-7 shadow-xl transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <div className="text-6xl transition duration-300 group-hover:scale-125">
                  {quiz.icon}
                </div>

                <span className="rounded-full bg-gray-100 px-4 py-1 text-sm font-bold text-gray-600 transition group-hover:bg-indigo-100 group-hover:text-indigo-700">
                  {quiz.badge}
                </span>
              </div>

              <h2 className="mt-8 text-3xl font-black text-gray-900 transition group-hover:text-indigo-700">
                {quiz.title}
              </h2>

              <p className="mt-3 text-gray-500">{quiz.description}</p>

              <div className="mt-6 font-bold text-indigo-600 opacity-0 transition group-hover:opacity-100">
                시작하기 →
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}