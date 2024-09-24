import { cn } from "@/lib/utils";
import React from "react";

interface WrapperProps {
  children: React.ReactNode;
  body?: boolean;
  className?: string;
}

const Wrapper = ({ children, body, className }: WrapperProps) => {
  return (
    <section
      className={cn(`max-w-[1200px] h-full m-auto py-5`, className, {
        "pt-28": body,
      })}
    >
      {children}
    </section>
  );
};

export default Wrapper;
