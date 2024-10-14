import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { createContext, useState, ReactNode } from "react";

interface AuthContextType {
  useLogin: (username: string, password: string) => unknown;
  useLogout: () => void;
  isAuth: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuth, setIsAuth] = useState(false);

  const useLogin = async (username: string, password: string) => {
    return useMutation({
      mutationKey: ["login"],
      mutationFn: async () => {
        const { data } = await axios.post("http://localhost:3000/auth/login", {
          username,
          password,
        });

        return data;
      },
      onSuccess: (data) => {
        setIsAuth(true);
        localStorage.setItem("token", data.access_token);
      },
    });
  };

  const useLogout = async () => {
    return useMutation({
      mutationKey: ["logout"],
      mutationFn: async () => {
        await axios.post("http://localhost:3000/auth/logout");
      },
      onSuccess: () => {
        setIsAuth(false);
        localStorage.removeItem("token");
      },
    });
  };

  return (
    <AuthContext.Provider value={{ useLogin, useLogout, isAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
