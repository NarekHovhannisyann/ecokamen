import React, {
  FC,
  createContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { getUser } from '@/services/user.service';
import { IUser } from '@/types/user.types';

export const AuthContext = createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
  userData: {
    _id: '',
    name: '',
    surname: '',
    patronymic: '',
    email: '',
    phone: '',
    password: '',
  },
});

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<IUser>({
    _id: '',
    name: '',
    surname: '',
    patronymic: '',
    email: '',
    phone: '',
    password: '',
  });

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  const getUserData = async () => {
    const data = await getUser();

    if (data.success) {
      setUserData(data.data);
    }
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      getUserData();
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
        userData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
