import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/partials/navbar";
import Head from "next/head";

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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
