import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../../shares/state/authState";
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
      await login({ userName: username, passWord: password });
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
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/illustration.jpg"
          alt=""
          className="h-full w-full object-cover opacity-50"
        />

        {/* Blue overlay */}
        <div className="absolute inset-0 bg-blue-100/50" />
        <div className="absolute inset-0 bg-white/20" />
      </div>

      {/* Login Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-8">
        {/* Login Card */}
        <div className="w-full max-w-md rounded-2xl border border-white/60 bg-white/90 p-8 shadow-2xl backdrop-blur-md sm:p-10">
          {/* Logo */}
          <div className="mb-12 flex items-center justify-center gap-2">
            <div className="h-3 w-3 rounded-[4px] bg-blue-600" />

            <span className="text-sm font-bold text-blue-950">Internship</span>
          </div>

          {/* Heading */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-blue-950">
              Hellllo,
              <br />
              Welcome Back
            </h1>

            <p className="mt-4 text-sm text-slate-400">
              Hey, welcome back to Tengfei Internship Portal.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="w-full">
            {/* Error */}
            {error && (
              <div className="mb-5 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* Username */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="
                                    h-12
                                    w-full
                                    rounded-lg
                                    border
                                    border-slate-200
                                    bg-white
                                    px-4
                                    text-sm
                                    text-slate-700
                                    outline-none
                                    transition
                                    placeholder:text-slate-400
                                    focus:border-blue-500
                                    focus:ring-2
                                    focus:ring-blue-100
                                "
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="
                                    h-12
                                    w-full
                                    rounded-lg
                                    border
                                    border-slate-200
                                    bg-white
                                    px-4
                                    text-sm
                                    text-slate-700
                                    outline-none
                                    transition
                                    placeholder:text-slate-400
                                    focus:border-blue-500
                                    focus:ring-2
                                    focus:ring-blue-100
                                "
              />
            </div>

            {/* Remember + Forgot */}
            <div className="mb-10 flex items-center justify-between">
              <label className="flex cursor-pointer items-center gap-2">
                <input
                  type="checkbox"
                  className="
                                        h-4
                                        w-4
                                        cursor-pointer
                                        rounded
                                        border-slate-300
                                        accent-blue-600
                                    "
                />

                <span className="text-xs text-slate-500">Remember me</span>
              </label>

              <button
                type="button"
                className="
                                    text-xs
                                    font-medium
                                    text-slate-500
                                    transition
                                    hover:text-blue-600
                                "
              >
                Forgot Password?
              </button>
            </div>

            {/* Sign In */}
            <button
              type="submit"
              disabled={isLoading}
              className="
                                h-12
                                w-full
                                rounded-lg
                                bg-blue-600
                                text-sm
                                font-semibold
                                text-white
                                shadow-sm
                                transition
                                hover:bg-blue-700
                                focus:outline-none
                                focus:ring-2
                                focus:ring-blue-300
                                disabled:cursor-not-allowed
                                disabled:opacity-60
                            "
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          {/* Sign Up */}
          <p className="mt-10 text-center text-xs text-slate-400">
            Don't have an account?{" "}
            <button
              type="button"
              className="
                                font-semibold
                                text-blue-600
                                hover:text-blue-700
                            "
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
