import Footer from "@/components/partials/footer";
import Navbar from "@/components/partials/navbar";
import Wrapper from "@/components/partials/wrapper";
import React from "react";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <section className="w-screen bg-zinc-100">
      <Navbar />
      <Wrapper body>{children}</Wrapper>
    </section>
  );
};

export default DashboardLayout;
