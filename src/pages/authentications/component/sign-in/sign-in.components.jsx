import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../../shares/authState";
import { PATHS } from "../../../../constants/path";

export default function SignIn() {
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      await login({ username, password });
      navigate(PATHS.HOME);
    } catch (loginError) {
      setError(
        loginError.response?.data?.message ||
          loginError.message ||
          "Sign in failed. Please check your credentials.",
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <form onSubmit={handleLogin} className="w-96 rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold">Sign In</h1>

        {error && <p className="mb-4 text-sm text-red-600">{error}</p>}

        <input
          className="mb-4 w-full rounded border p-3"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          className="mb-6 w-full rounded border p-3"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button disabled={isLoading} className="w-full rounded bg-blue-600 p-3 text-white disabled:opacity-50">
          {isLoading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}
