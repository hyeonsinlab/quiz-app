import { FormEvent, useState } from "react";
import axios from "axios";

export default function Signup() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");

  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:4000/api/auth/signup", {
        email,
        password,
        nickname,
      });

      alert(res.data.message);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        alert(err.response?.data?.message || "회원가입 실패");
      } else {
        alert("회원가입 실패");
      }
    }
  };

  return (
    <div>
      <h1>회원가입</h1>

      <form onSubmit={handleSignup}>
        <input type="email" placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <input type="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <input type="text" placeholder="닉네임" value={nickname} onChange={(e) => setNickname(e.target.value)} />
        <br />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}