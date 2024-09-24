import Navbar from "@/components/partials/navbar";
import Wrapper from "@/components/partials/wrapper";

export default function Home() {
  return (
    <div className="h-screen w-full">
      <Wrapper body>
        <h1 className="text-3xl font-bold">Welcome to Mercury</h1>
      </Wrapper>
    </div>
  );
}
