
import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  role: 'student' | 'educator';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role: 'student' | 'educator') => Promise<boolean>;
  logout: () => void;
  signup: (email: string, password: string, name: string, role: 'student' | 'educator') => Promise<boolean>;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const savedUser = localStorage.getItem('edututor-user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string, role: 'student' | 'educator'): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call - replace with actual authentication logic
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // For demo purposes, accept any email/password combination
    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      name: email.split('@')[0],
      role
    };
    
    setUser(newUser);
    localStorage.setItem('edututor-user', JSON.stringify(newUser));
    setIsLoading(false);
    return true;
  };

  const signup = async (email: string, password: string, name: string, role: 'student' | 'educator'): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call - replace with actual signup logic
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      name,
      role
    };
    
    setUser(newUser);
    localStorage.setItem('edututor-user', JSON.stringify(newUser));
    setIsLoading(false);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('edututor-user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signup, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
