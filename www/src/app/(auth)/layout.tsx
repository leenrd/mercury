import Image from "next/image";
import React from "react";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <article className="grid grid-cols-2 h-screen">
      <div className="col-span-1">{children}</div>
      <div className="col-span-1 relative object-cover">
        <Image
          src={"/auth-bg.png"}
          alt="auth-bg"
          fill
          className="col-span-1"
          draggable={"false"}
        />
      </div>
    </article>
  );
};

export default AuthLayout;
