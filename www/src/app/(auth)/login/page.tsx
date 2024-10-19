import Wrapper from "@/components/partials/wrapper";
import React from "react";
import LoginForm from "./_partial/form";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const LoginPage = () => {
  return (
    <Wrapper body>
      <section className="h-screen flex flex-col gap-6 items-center">
        <h1 className="font-bold text-4xl">Welcome back!</h1>
        <Link href="/signup">
          <Button variant={"link"}>Or Create account</Button>
        </Link>

        <br />

        <LoginForm />
      </section>
    </Wrapper>
  );
};

export default LoginPage;
