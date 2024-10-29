import api from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export const useGetAccounts = () => {
  return useQuery({
    queryKey: ["accounts"],
    queryFn: async () => {
      const { data } = await api.get(`${process.env.baseUrl}/account/all`);
      return data;
    },
    refetchOnWindowFocus: false,
  });
};
