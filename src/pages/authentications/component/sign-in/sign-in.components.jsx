import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../../shares/authState";
import { PATHS } from "../../../../constants/path";

export default function SignIn() {
  const login = useAuthStore((state) => state.login);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    const success = await login({
      email,
      password,
    });

    if (success) {
      navigate(PATHS.HOME);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <form
        onSubmit={handleLogin}
        className="w-96 rounded-xl bg-white p-8 shadow-lg"
      >
        <h1 className="mb-6 text-center text-3xl font-bold">
          Sign In
        </h1>

        <input
          className="mb-4 w-full rounded border p-3"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="mb-6 w-full rounded border p-3"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full rounded bg-blue-600 p-3 text-white">
          Sign In
        </button>
      </form>
    </div>
  );
}