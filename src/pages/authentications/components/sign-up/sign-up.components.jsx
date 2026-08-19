import { useNavigate } from "react-router-dom";
import {RegisterCommand} from "../../models/sign-up/resgiter-command";
import { useState } from "react";
import {authService} from "../../services/authService";

export default function SignUp(){
    const navigate = useNavigate();
    const [form, setForm] = useState(new RegisterCommand());
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    console.log("ấdfasdf");
    const handleChange = (e) =>{
        const {name, value} = e.target;
        setForm((prev)=>({
            ...prev,
            [name]: value
        }));

    }
    const inputStyle = `
    h-11 w-full rounded-lg border border-slate-200 bg-white px-4 text-sm text-slate-700 
    outline-none transition placeholder:text-slate-400 focus:border-blue-500 
    focus:ring-2 focus:ring-blue-100
  `;
    const handleSignUp = async (e) =>{
        e.preventDefault();
        setIsLoading(true);
        setError("");
        try{
            const payload = new RegisterCommand(form);
            const response = await authService.register(payload);
            if (response != null){
                alert("Đăng ký thành công! Vui lòng đăng nhập để tiếp tục.");
                navigate("/login"); 
            }
            setError("Đăng ký thất bại. Vui lòng thử lại.");
            return;
            
        }
        catch(error){
            setError(error.message || "Đăng ký thất bại. Vui lòng thử lại.");
        }
        finally{
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
        <div className="absolute inset-0 bg-blue-100/50" />
        <div className="absolute inset-0 bg-white/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-10">
        {/* Register Card */}
        <div className="w-full max-w-2xl rounded-2xl border border-white/60 bg-white/90 p-6 shadow-2xl backdrop-blur-md sm:p-10">
          {/* Logo */}
          <div className="mb-6 flex items-center justify-center gap-2">
            <div className="h-3 w-3 rounded-[4px] bg-blue-600" />
            <span className="text-sm font-bold text-blue-950">Internship</span>
          </div>

          {/* Heading */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-blue-950 sm:text-4xl">
              Create Account
            </h1>
            <p className="mt-2 text-sm text-slate-400">
              Join Tengfei Internship Portal today.
            </p>
          </div>

          {/* Form */}
          <form handleSignUp={handleSignUp} className="w-full">
            {/* Hiển thị thông báo lỗi nội bộ */}
            {error && (
              <div className="mb-5 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* Form Fields Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* Holder Name */}
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-600">
                  Full Name
                </label>
                <input
                  type="text"
                  name="holderName"
                  placeholder="John Doe"
                  value={form.holderName}
                  onChange={handleChange}
                  required
                  className={inputStyle}
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-600">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@domain.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className={inputStyle}
                />
              </div>

              {/* Telephone */}
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-600">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="telephone"
                  placeholder="0912345678"
                  value={form.telephone}
                  onChange={handleChange}
                  className={inputStyle}
                />
              </div>

              {/* Citizen ID */}
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-600">
                  Citizen ID
                </label>
                <input
                  type="text"
                  name="citizendId"
                  placeholder="0123456789xx"
                  value={form.citizendId}
                  onChange={handleChange}
                  className={inputStyle}
                />
              </div>

              {/* Gender */}
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-600">
                  Gender
                </label>
                <select
                  name="gender"
                  value={form.gender ?? ""}
                  onChange={handleChange}
                  className={inputStyle}
                >
                  <option value="">Select Gender</option>
                  <option value={1}>Male</option>
                  <option value={2}>Female</option>
                  <option value={0}>Other</option>
                </select>
              </div>

              {/* Birth Date */}
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-600">
                  Birth Date
                </label>
                <input
                  type="date"
                  name="birthDate"
                  value={form.birthDate || ""}
                  onChange={handleChange}
                  className={inputStyle}
                />
              </div>

              {/* Birth Place */}
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-600">
                  Birth Place
                </label>
                <input
                  type="text"
                  name="birthPlace"
                  placeholder="Hanoi, Vietnam"
                  value={form.birthPlace}
                  onChange={handleChange}
                  className={inputStyle}
                />
              </div>

              {/* Role */}
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-600">
                  Role
                </label>
                <select
                  name="role"
                  value={form.role ?? ""}
                  onChange={handleChange}
                  className={inputStyle}
                >
                  <option value="">Select Role</option>
                  <option value={1}>Intern</option>
                  <option value={2}>Mentor</option>
                </select>
              </div>

              {/* Address */}
              <div className="sm:col-span-2">
                <label className="mb-1 block text-xs font-medium text-slate-600">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="Street name, City..."
                  value={form.address}
                  onChange={handleChange}
                  className={inputStyle}
                />
              </div>

              {/* Password */}
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-600">
                  Password
                </label>
                <input
                  type="password"
                  name="passWord"
                  placeholder="••••••••"
                  value={form.passWord}
                  onChange={handleChange}
                  required
                  className={inputStyle}
                />
              </div>

              {/* State */}
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-600">
                  State
                </label>
                <select
                  name="state"
                  value={form.state ?? ""}
                  onChange={handleChange}
                  className={inputStyle}
                >
                  <option value="">Select State</option>
                  <option value={1}>Active</option>
                  <option value={0}>Pending</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="mt-8 h-12 w-full rounded-lg bg-blue-600 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoading ? "Creating account..." : "Sign Up"}
            </button>
          </form>

          {/* Link back to Sign In */}
          <p className="mt-8 text-center text-xs text-slate-400">
            Already have an account?{" "}
            <button
              type="button"
              className="font-semibold text-blue-600 hover:text-blue-700"
            >
              Sign In
            </button>
          </p>
        </div>
      </div>
    </div>
  );

   
}