import api from "@/lib/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetTransactions = (page: number, pageSize: number) => {
  return useQuery({
    queryKey: ["transactions"],
    queryFn: async () => {
      const { data } = await api.get(
        `${process.env.baseUrl}/transaction/all?page=${page}&pageSize=${pageSize}`
      );
      return data;
    },
  });
};

export const useGetTransactionById = (id: string) => {
  return useQuery({
    queryKey: ["transaction", id],
    queryFn: async () => {
      const { data } = await api.get(
        `${process.env.baseUrl}/transaction/get/${id}`
      );
      return data;
    },
    refetchOnWindowFocus: false,
  });
};

export const useGetStats = () => {
  return useQuery({
    queryKey: ["stats"],
    queryFn: async () => {
      const { data } = await api.get(
        `${process.env.baseUrl}/transaction/stats`
      );
      return data;
    },
    refetchOnWindowFocus: false,
  });
};

export const useAddTransaction = () => {
  const query = useQueryClient();
  return useMutation({
    mutationFn: async (transaction: any) => {
      const { data } = await api.post(
        `${process.env.baseUrl}/transaction/add`,
        transaction
      );
      return data;
    },
    onSuccess: () => {
      query.invalidateQueries({ queryKey: ["transactions"] });
    },
  });
};

export const useUpdateTransaction = () => {
  return useMutation({
    mutationFn: async (transaction: any) => {
      const { data } = await api.put(
        `${process.env.baseUrl}/transaction/update/${transaction.id}`,
        transaction
      );
      return data;
    },
  });
};

export const useDeleteTransaction = () => {
  return useMutation({
    mutationFn: async (id: string) => {
      const { data } = await api.delete(
        `${process.env.baseUrl}/transaction/delete/${id}`
      );
      return data;
    },
  });
};
