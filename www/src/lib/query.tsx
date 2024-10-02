"use client";

import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const query = new QueryClient();

export default function QueryClientContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  return <QueryClientProvider client={query}>{children}</QueryClientProvider>;
}
