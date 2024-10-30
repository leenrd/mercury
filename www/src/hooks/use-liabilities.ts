import api from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export const useGetLiabilities = () => {
  return useQuery({
    queryKey: ["liabilities"],
    queryFn: async () => {
      const { data } = await api.get(`${process.env.baseUrl}/liability/all`);

      return data;
    },
    refetchOnWindowFocus: false,
  });
};

export const useGetTotalLiabilitiesCount = () => {
  return useQuery({
    queryKey: ["lb_total"],
    queryFn: async () => {
      const { data } = await api.get(`${process.env.baseUrl}/liability/total`);
      return data;
    },
    refetchOnWindowFocus: false,
  });
};
