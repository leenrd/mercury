import Wrapper from "@/components/partials/wrapper";
import React from "react";
import SignUpForm from "./_partial/form";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <Wrapper body>
      <section className="flex flex-col gap-6 items-center">
        <h1 className="font-bold text-4xl">Create account</h1>
        <Link href="/login">
          <Button variant={"link"}>Already have an account?</Button>
        </Link>

        <br />

        <SignUpForm />
      </section>
    </Wrapper>
  );
};

export default SignUpPage;
