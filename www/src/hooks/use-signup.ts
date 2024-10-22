import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useAuth } from "./use-auth";

export const useSignUp = () => {
  const { loginMutation } = useAuth();

  return useMutation({
    mutationFn: async ({
      username,
      password,
    }: {
      username: string;
      password: string;
    }) => {
      const { data } = await axios.post(
        `${process.env.baseUrl}/auth/register`,
        {
          username,
          password,
        }
      );

      return { data, username, password };
    },
    onSuccess: async ({ data, username, password }) => {
      await loginMutation.mutateAsync({
        username,
        password,
      });
      console.log("Success", data);
    },
    onError: (error) => {
      console.log("Error", error);
    },
  });
};
