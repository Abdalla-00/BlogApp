import { createContext, useContext, useEffect, useState } from "react";

const UserContex = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("expirationTime");
    setUser(null);
  };

  useEffect(() => {
    const expirationTime = localStorage.getItem("expirationTime");
    const storedUser = localStorage.getItem("user");

    if (storedUser && expirationTime) {
      const currentTime = new Date().getTime();

      if (currentTime < parseInt(expirationTime)) {
        setUser(JSON.parse(storedUser));
      }
    }
  }, []);

  const login = (userData, expiresIn) => {
    const expirationTime = new Date().getTime() + expiresIn * 1000;

    localStorage.setItem("expirationTime", expirationTime.toString());
    localStorage.setItem("user", JSON.stringify(userData));

    setUser(userData);
  };

  return (
    <UserContex.Provider value={{ login, user, setUser, logout }}>
      {children}
    </UserContex.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContex);
};

export default UserContex;
