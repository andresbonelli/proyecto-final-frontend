import React, { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { SubjectFromToken, AccessToken } from "../utils/interfaces";
import { cookies } from "next/headers";

const UserContext = createContext<any>(null);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<SubjectFromToken | null>(null);

  useEffect(() => {
    const accessToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("access_token="))
      ?.split("=")[1];

    if (accessToken) {
      const decoded: AccessToken = jwtDecode(accessToken);
      setUser(decoded.subject);
    }
  }, []);

  const logout = () => {
    document.cookie = "access_token=; Max-Age=0; path=/;";
    document.cookie = "refresh_token=; Max-Age=0; path=/;";

    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
