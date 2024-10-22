"use client";

import Navbar from "@/components/partials/navbar";
import Wrapper from "@/components/partials/wrapper";
import { AuthProvider } from "@/services/_auth-provider";
import React from "react";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <AuthProvider>
      <section className="bg-zinc-100">
        <Navbar />
        <Wrapper body>{children}</Wrapper>
      </section>
    </AuthProvider>
  );
};

export default DashboardLayout;
