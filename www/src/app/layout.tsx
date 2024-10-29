import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import QueryClientContextProvider from "@/lib/query";

export const metadata: Metadata = {
  title: "Mercury",
  description: "Creator: John Leenard Zarate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-geist antialiased">
        <QueryClientContextProvider>{children}</QueryClientContextProvider>
        <Toaster />
      </body>
    </html>
  );
}
