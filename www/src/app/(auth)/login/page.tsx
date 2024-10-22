import Wrapper from "@/components/partials/wrapper";
import React from "react";
import LoginForm from "./_partial/form";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const LoginPage = () => {
  return (
    <Wrapper body>
      <section className="flex flex-col gap-6 items-center">
        <h1 className="font-bold text-4xl">Welcome back!</h1>
        <div>
          <Link href="/signup">
            <Button variant={"link"}>Create account</Button>
          </Link>
          <Link href="/market">
            <Button variant={"link"}>or Goto Markets</Button>
          </Link>
        </div>

        <br />

        <LoginForm />
      </section>
    </Wrapper>
  );
};

export default LoginPage;
