import { createContext, useEffect, useState } from 'react';
import { obterRole, obterToken, logout } from '../utils/crypto';

type IAuthContext = {
  authenticated: boolean;
  isOperador: boolean;
  handleLogin: () => void;
  handleLogout: () => void;
};

const Context = createContext<IAuthContext | undefined>(undefined);

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [isOperador, setIsOperador] = useState(false);

  function checkIsAuthenticated() {
    const token = obterToken() !== '';

    setAuthenticated(token);
  }

  function checkIsOperador() {
    const role = obterRole();
    if (role === '') {
      setIsOperador(false);
    }

    if (role === '0') {
      setIsOperador(true);
    } else setIsOperador(false);
  }

  function handleLogin() {
    setAuthenticated(true);
    checkIsOperador();
  }

  function handleLogout() {
    logout();
    setAuthenticated(false);
    setIsOperador(false);
  }

  useEffect(() => {
    checkIsAuthenticated();
    checkIsOperador();
  }, []);

  return (
    <Context.Provider
      value={{
        authenticated,
        isOperador,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
