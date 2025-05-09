import React, { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function Login() {
  const { login } = useAuthContext();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      setError('Invalid email or password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url('/bj.jpg')` }}
    >
      <div className="flex w-3/4 max-w-4xl bg-black bg-opacity-50 rounded-lg shadow-lg overflow-hidden">
        {/* Left Side */}
        <div className="w-1/2 flex items-center justify-center text-white p-6">
          <h1 className="text-4xl font-bold">Welcome Back</h1>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-1/2 bg-white text-black p-10 rounded-lg">
          <h2 className="text-2xl font-bold text-center">CUMall</h2>
          <h3 className="text-xl font-semibold text-center mt-2">Login</h3>

          {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}

          <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
            {/* Email Input */}
            <input
              type="email"
              placeholder="Email address"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            {/* Password Input */}
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-4 bg-green-500 text-white p-3 rounded-md hover:bg-green-600 transition"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          {/* Terms of Service */}
          <p className="text-center text-xs mt-4">
            By creating an account, you agree to our{' '}
            <span className="text-green-600 cursor-pointer">Terms of Services</span> or{' '}
            <span className="text-green-600 cursor-pointer">Privacy Policy</span>
          </p>

          {/* Sign Up Link */}
          <p className="text-center mt-4">
            Don’t have an account?{' '}
            <Link to="/signup" className="text-green-600 font-semibold hover:underline">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
