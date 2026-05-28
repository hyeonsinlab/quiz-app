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
    <main className="h-dvh overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-5">
      <section className="mx-auto flex h-full max-w-5xl flex-col gap-4">
        {/* HERO */}
        <div className="rounded-[2rem] bg-white/95 p-6 shadow-2xl">
          <span className="inline-block rounded-full bg-indigo-100 px-4 py-1 text-sm font-bold text-indigo-700">
            QUIZ PLAYGROUND
          </span>

          <h1 className="mt-4 break-keep text-4xl font-black leading-tight text-gray-900 sm:text-5xl">
            이슬이네
            <br />
            QUIZ 놀이터
          </h1>

          <p className="mt-3 break-keep text-base leading-relaxed text-gray-500">
            원하는 퀴즈를 골라 도전해보세요.
          </p>
        </div>

        {/* QUIZ GRID */}
        <div className="grid flex-1 grid-cols-2 gap-4">
          {quizMenus.map((quiz) => (
            <Link
              key={quiz.href}
              href={quiz.href}
              className="group flex flex-col justify-between rounded-[2rem] bg-white/95 p-5 shadow-xl transition active:scale-[0.97] sm:hover:-translate-y-2 sm:hover:scale-[1.02] sm:hover:shadow-2xl"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="text-4xl transition duration-300 sm:group-hover:scale-125">
                  {quiz.icon}
                </div>

                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-600 transition sm:group-hover:bg-indigo-100 sm:group-hover:text-indigo-700">
                  {quiz.badge}
                </span>
              </div>

              <div className="mt-6">
                <h2 className="break-keep text-2xl font-black leading-tight text-gray-900 transition sm:group-hover:text-indigo-700">
                  {quiz.title}
                </h2>

                <p className="mt-2 break-keep text-sm leading-snug text-gray-500">
                  {quiz.description}
                </p>
              </div>

              <div className="mt-4 hidden font-bold text-indigo-600 opacity-0 transition sm:block sm:group-hover:opacity-100">
                시작하기 →
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}