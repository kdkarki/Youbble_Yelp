import { IdToken } from '@auth0/auth0-react';
import React, { createContext, useContext, ReactNode } from 'react';

type AuthContextType = {
  isAuthenticated: boolean;
  isLoading: boolean;
  roles: string[] | null;
  idToken: IdToken | null;
  setAuthInfo: (info: AuthInfo) => void;
};

type AuthInfo = {
  isAuthenticated: boolean;
  isLoading: boolean;
  roles: string[] | null;
  idToken: IdToken | null;
};

const defaultAuthInfo = {
  isAuthenticated: false,
  isLoading: false,
  roles: null,
  idToken: null,
  setAuthInfo: () => {},
};

const AuthContext = createContext<AuthContextType>(defaultAuthInfo);

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authInfo, setAuthInfoState] = React.useState<AuthInfo>(defaultAuthInfo);

  const setAuthInfo = (info: AuthInfo) => {
    setAuthInfoState(info);
  };

  return (
    <AuthContext.Provider value={{ ...authInfo, setAuthInfo }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
