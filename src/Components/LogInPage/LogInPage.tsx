import { useState } from "react";
import { NavLink } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="font-inter text-gray-900 min-h-150 flex items-center justify-center p-4">
      <div className="w-full max-w-sm text-center">
        {/* Main Heading */}
        <h1 className="font-poppins text-4xl font-bold mb-8">Login</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Input */}
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="w-full px-5 py-3 border border-gray-300 rounded-full bg-transparent focus:outline-none focus:border-black transition-colors"
            />
          </div>

          {/* Password Input */}
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="w-full px-5 py-3 border border-gray-300 rounded-full bg-transparent focus:outline-none focus:border-black transition-colors"
            />
          </div>

          {/* Forgot Password Link */}
          <div className="text-left">
            <NavLink to="/" className="text-sm text-gray-600 hover:underline">
              Forgot your password?
            </NavLink>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full font-poppins bg-gray-900 text-white border-none rounded-full py-3 text-base font-medium cursor-pointer transition-opacity hover:opacity-80"
          >
            Sign in
          </button>
        </form>

        {/* Bottom Links */}
        <div className="mt-8 space-y-3">
          <p>
            <NavLink
              to="/"
              className="text-sm text-gray-800 font-medium hover:underline"
            >
              Create account
            </NavLink>
          </p>
          <p>
            <NavLink to="/" className="text-sm text-gray-600 hover:underline">
              Manage subscriptions
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
