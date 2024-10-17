import api from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export const useGetAssets = () => {
  return useQuery({
    queryKey: ["assets"],
    queryFn: async () => {
      const { data } = await api.get(`${process.env.baseUrl}/assets/`);
      return data;
    },
    refetchOnWindowFocus: false,
  });
};

export const useGetTotalAssetCount = () => {
  return useQuery({
    queryKey: ["assets_total"],
    queryFn: async () => {
      const { data } = await api.get(`${process.env.baseUrl}/assets/total`);
      return data;
    },
    refetchOnWindowFocus: false,
  });
};
