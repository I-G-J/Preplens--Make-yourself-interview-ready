import { createContext, useContext } from 'react';
import { useUser, useClerk } from '@clerk/react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const { user: clerkUser, isLoaded } = useUser();
  const { signOut } = useClerk();

  const logout = async () => {
    await signOut();
  };

  const value = {
    user: clerkUser,
    logout,
    loading: !isLoaded,
    isAuthenticated: !!clerkUser
  };

  return (
    <AuthContext.Provider value={value}>
      {isLoaded && children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

