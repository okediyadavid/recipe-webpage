import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { Eye, EyeOff } from 'lucide-react';

export default function Signup() {
  const { signup } = useAuthContext();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [room, setRoom] = useState('');
  const [hall, setHall] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await signup(email, password);
      navigate('/'); // Redirect to Home after successful signup
    } catch (err) {
      setError(err.message || 'Failed to create account. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url('/bg.jpg')` }}
    >
      <div className="flex max-w-4xl w-full bg-black bg-opacity-50 rounded-lg shadow-lg overflow-hidden">
        {/* Left Section: Welcome Message */}
        <div className="w-1/2 flex items-center justify-center p-6">
          <h1 className="text-5xl font-bold text-white">Welcome <br /> to CUMall</h1>
        </div>

        {/* Right Section: Signup Form */}
        <div className="w-1/2 bg-white text-black p-8 shadow-lg rounded-lg">
          <h2 className="text-center text-xl font-semibold">CUMall</h2>
          <h3 className="text-center text-2xl font-bold mt-2">Create Account</h3>

          {error && <p className="text-red-600 text-sm text-center mt-2">{error}</p>}

          <form onSubmit={handleSignup} className="mt-4 space-y-3">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Room number"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Hall"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={hall}
              onChange={(e) => setHall(e.target.value)}
              required
            />
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
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <button
              type="submit"
              className="w-full mt-4 bg-green-500 text-white p-3 rounded-md hover:bg-green-600 transition"
              disabled={loading}
            >
              {loading ? 'Signing up...' : 'Sign Up'}
            </button>
          </form>

          <p className="text-sm text-center mt-3">
            By creating an account, you agree to our{' '}
            <span className="text-green-600 cursor-pointer">Terms of Services</span> or{' '}
            <span className="text-green-600 cursor-pointer">Privacy Policy</span>
          </p>

          <p className="text-center mt-2">
            Have an account? <Link to="/login" className="text-green-700 font-semibold hover:underline">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
