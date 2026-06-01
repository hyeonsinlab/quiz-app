import Login from "./pages/Login";
import Signup from "./pages/Signup";
import QuizEngine from "./components/QuizEngine";
import { capitalQuizData } from "../data/capitalQuiz";

function App() {
  const token = localStorage.getItem("token");

  const formattedQuizData = capitalQuizData.map((quiz, index) => ({
    id: index + 1,
    question: quiz.question,
    answer: quiz.answer,
    choices: [...quiz.options],
    imageUrl: quiz.imageUrl,
  }));

  return (
    <div>
      {token ? (
        <div>
          <QuizEngine
            title="국기 수도 퀴즈"
            description="국가의 수도를 맞춰보세요!"
            quizzes={formattedQuizData}
            timeLimit={15}
          />

          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <button
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                window.location.reload();
              }}
              style={{
                background: "#ef4444",
                color: "white",
                border: "none",
                borderRadius: "12px",
                padding: "12px 24px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              로그아웃
            </button>
          </div>
        </div>
      ) : (
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background:
              "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            padding: "20px",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "420px",
              background: "white",
              borderRadius: "24px",
              padding: "32px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
            }}
          >
            <h1
              style={{
                textAlign: "center",
                marginBottom: "24px",
                fontSize: "32px",
              }}
            >
              🌍 수도 퀴즈
            </h1>

            <Signup />

            <div
              style={{
                margin: "24px 0",
                borderTop: "1px solid #ddd",
              }}
            />

            <Login />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
