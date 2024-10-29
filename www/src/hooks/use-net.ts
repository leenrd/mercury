import api from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export const useGetNetStat = () => {
  return useQuery({
    queryKey: ["net-total"],
    queryFn: async () => {
      const { data } = await api.get(`${process.env.baseUrl}/net/total`);
      return data;
    },
  });
};

export const useGetNetGraph = () => {
  return useQuery({
    queryKey: ["net-graph"],
    queryFn: async () => {
      const { data } = await api.get(`${process.env.baseUrl}/net/graph`);
      return data;
    },
  });
};
