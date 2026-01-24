import { createContext, type PropsWithChildren, useEffect, useState } from 'react';
import { users, type User } from "../data/user-mock.data";


type AuthStatus ='checking' | 'authenticated' | 'not-authenticated';

interface UserContextProps {
  // state
  authStatus: AuthStatus;
  user: User| null;
  isAuthenticated: boolean,
  // methods
  login: (userId: number) => boolean;
  logout: () => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext<UserContextProps>({} as UserContextProps);

export const UserContextProvider = ({children}:PropsWithChildren) => {
  const [authStatus, setAuthStatus] = useState<AuthStatus>('checking');
  const [user, setUser] = useState<User | null>(null)


  const handleLogin = (userId: number) => {
    const user = users.find(user => user.id === userId);
    if (!user) {
      console.log(`User not found ${userId}`)
      setUser(null)
      setAuthStatus('not-authenticated')
      return false;
    } 
    setUser(user)
    setAuthStatus('authenticated')
    localStorage.setItem('userId', userId.toString());
    return true;
  }
  const handleLogout = () => {
    setUser(null)
    setAuthStatus('not-authenticated')
    localStorage.removeItem('userId');
  }

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      handleLogin(+storedUserId)
      return;
    }
    handleLogout();
  }, [])
  


  return <UserContext value={{
    authStatus: authStatus,
    user,
    isAuthenticated: authStatus === 'authenticated',
    login: handleLogin,
    logout: handleLogout
  }}>{ children }</UserContext>
}
