import { createContext, useContext, useEffect, useState } from 'react';

// Create authentication context
const AuthContext = createContext();

// Custom hook to use AuthContext
export const useAuthContext = () => useContext(AuthContext);

export const AuthcontextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user from local storage on app start
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Signup function
  const signup = async (email, password) => {
    try {
      // Simulating API call (Replace this with actual API call)
      const newUser = { email, isAdmin: false }; // Default user (not admin)
      localStorage.setItem('user', JSON.stringify(newUser));
      setUser(newUser);
    } catch (error) {
      console.error('Signup error:', error.message);
      throw new Error('Signup failed');
    }
  };

  // Login function
  const login = async (email, password) => {
    try {
      // Simulating API call (Replace this with actual authentication)
      const existingUser = { email, isAdmin: email === 'admin@example.com' }; // Admin check
      localStorage.setItem('user', JSON.stringify(existingUser));
      setUser(existingUser);
    } catch (error) {
      console.error('Login error:', error.message);
      throw new Error('Login failed');
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
