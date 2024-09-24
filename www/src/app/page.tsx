import Wrapper from "@/components/partials/wrapper";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="h-screen w-full bg-zinc-100">
      <Wrapper body>
        <Card>
          <CardHeader className="flex justify-between">
            <CardDescription>Net Worth</CardDescription>
            <CardTitle>
              <p className="text-3xl font-bold">₱ 5,000,000</p>
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p>Card Content</p>
          </CardContent>
        </Card>
      </Wrapper>
    </div>
  );
}
