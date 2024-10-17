"use client";

import { useQuery } from "@tanstack/react-query";

export const useGetMarketNews = () => {
  return useQuery({
    queryKey: ["market-news"],
    queryFn: async () => {
      const response = await fetch(
        `https://newsdata.io/api/1/latest?apikey=${process.env.MARKET_NEWS_KEY}&q=philippines`
      );
      return response.json();
    },
  });
};
