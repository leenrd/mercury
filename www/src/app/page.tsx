import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-full flex flex-col gap-5 items-center justify-start mt-20">
      <Button variant={"secondary"}>Hello</Button>
    </div>
  );
}
