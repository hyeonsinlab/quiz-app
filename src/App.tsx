import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const token = localStorage.getItem("token");

  return (
    <div>
    <h2>로그인 상태</h2>

    <button
        onClick={() => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        window.location.reload();
        }}
    >
        로그아웃
    </button>
    </div>
  );
}

export default App;