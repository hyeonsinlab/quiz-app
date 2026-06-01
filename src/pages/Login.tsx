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
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await axios.post<LoginResponse>("http://localhost:4000/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      alert("로그인 성공");
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
      <h1>로그인</h1>

      <form onSubmit={handleLogin}>
        <input type="email" placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <input type="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}