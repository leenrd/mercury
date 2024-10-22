"use client";

import { createContext, useEffect, useState, ReactNode } from "react";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";

interface AuthContextType {
  loginMutation: UseMutationResult<
    any,
    unknown,
    { username: string; password: string },
    unknown
  >;
  logoutMutation: UseMutationResult<any, unknown, void, unknown>;
  isAuth: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuth, setIsAuth] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuth(!!token);
  }, []);

  const loginMutation = useMutation({
    mutationFn: async ({
      username,
      password,
    }: {
      username: string;
      password: string;
    }) => {
      const { data } = await axios.post("http://localhost:3000/auth/login", {
        username,
        password,
      });
      return data;
    },
    onSuccess: (data) => {
      setIsAuth(true);
      localStorage.setItem("token", data.access_token);
      document.cookie = `acc_token=${data.access_token}; path=/;`;
      router.push("/overview");
    },
    onError: () => {
      console.error("Login failed");
    },
  });

  const logoutMutation = useMutation({
    mutationFn: async () => {
      await axios.post("http://localhost:3000/auth/logout");
    },
    onSuccess: () => {
      setIsAuth(false);
      localStorage.removeItem("token");
      document.cookie = `acc_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
      router.push("/login");
    },
    onError: () => {
      console.error("Logout failed");
    },
  });

  return (
    <AuthContext.Provider value={{ isAuth, loginMutation, logoutMutation }}>
      {children}
    </AuthContext.Provider>
  );
};
