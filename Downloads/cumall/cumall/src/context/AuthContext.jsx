import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { login, logout, adminUser } from '../api/firebase';

const AuthContext = createContext();

export function AuthcontextProvider({ children }) {
  const [authState, setAuthState] = useState({ user: null, loading: true });

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        try {
          const userData = await adminUser(firebaseUser);
          setAuthState({ user: userData, loading: false });
        } catch (error) {
          console.error('Error fetching user data:', error);
          setAuthState({ user: null, loading: false });
        }
      } else {
        setAuthState({ user: null, loading: false });
      }
    });

    return () => unsubscribe(); // Cleanup function
  }, []);

  // Memoizing the context value to prevent unnecessary re-renders
  const value = useMemo(
    () => ({
      loading: authState.loading,
      user: authState.user,
      uid: authState.user?.uid || null, // Prevents undefined errors
      login,
      logout,
    }),
    [authState]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
