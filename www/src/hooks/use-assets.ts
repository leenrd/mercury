import api from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export const useGetAssets = () => {
  return useQuery({
    queryKey: ["assets"],
    queryFn: async () => {
      const { data } = await api.get(`${process.env.baseUrl}/asset/all`);
      return data;
    },
    refetchOnWindowFocus: false,
  });
};

export const useGetTotalAssetCount = () => {
  return useQuery({
    queryKey: ["assets_total"],
    queryFn: async () => {
      const { data } = await api.get(`${process.env.baseUrl}/asset/total`);
      return data;
    },
    refetchOnWindowFocus: false,
  });
};

export const useGetVault = () => {
  return useQuery({
    queryKey: ["vault"],
    queryFn: async () => {
      const { data } = await api.get(`${process.env.baseUrl}/asset/vault`);
      return data;
    },
    refetchOnWindowFocus: false,
  });
};
