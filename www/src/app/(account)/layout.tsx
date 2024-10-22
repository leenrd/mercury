import Navbar from "@/components/partials/navbar";
import Wrapper from "@/components/partials/wrapper";
import { AuthProvider } from "@/services/_auth-provider";
import React from "react";

const AccountLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <section className="w-screen h-screen bg-zinc-100">
      <AuthProvider>
        <Navbar />
      </AuthProvider>
      <Wrapper body>{children}</Wrapper>
    </section>
  );
};

export default AccountLayout;
