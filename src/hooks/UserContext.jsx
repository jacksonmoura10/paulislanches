import { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);

  const putUserData = (userData) => {
    setUserInfo(userData);

    localStorage.setItem('@paulislanches:user', JSON.stringify(userData));
    localStorage.setItem('@paulislanches:token', userData.token);
  };

  const logout = () => {
    setUserInfo(null);

    localStorage.removeItem('@paulislanches:user');
    localStorage.removeItem('@paulislanches:token');
  };

  useEffect(() => {
    const user = localStorage.getItem('@paulislanches:user');
    const token = localStorage.getItem('@paulislanches:token');

    if (user && token) {
      setUserInfo({ token, ...JSON.parse(user) });
    }
  }, []);

  return (
    <UserContext.Provider value={{ userInfo, putUserData, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
