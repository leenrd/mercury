import Footer from "@/components/partials/footer";
import React from "react";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <article>
      {children}
      <Footer />
    </article>
  );
};

export default AuthLayout;
