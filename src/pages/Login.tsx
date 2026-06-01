import { FormEvent, useState } from "react";
import axios from "axios";

interface LoginResponse {
  message: string;
  token: string;
  user: {
    id: string;
    email: string;
    nickname: string;
  };
}

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await axios.post<LoginResponse>(
        "http://localhost:4000/api/auth/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      window.location.reload();
    } catch (err) {
      if (axios.isAxiosError(err)) {
        alert(err.response?.data?.message || "로그인 실패");
      } else {
        alert("로그인 실패");
      }
    }
  };

  return (
    <div>
      <h2 style={{ marginBottom: "16px" }}>로그인</h2>

      <form
        onSubmit={handleLogin}
        style={{ display: "flex", flexDirection: "column", gap: "12px" }}
      >
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />

        <button type="submit" style={buttonStyle}>
          로그인
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  padding: "14px",
  borderRadius: "12px",
  border: "1px solid #ddd",
  fontSize: "16px",
};

const buttonStyle = {
  padding: "14px",
  borderRadius: "12px",
  border: "none",
  background: "#6366f1",
  color: "white",
  fontSize: "16px",
  fontWeight: "bold" as const,
  cursor: "pointer",
};
