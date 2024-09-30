import Wrapper from "@/components/partials/wrapper";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import NetWorthGraph from "./_partials/networth-graph";

const AccountPage = () => {
  return (
    <article>
      <Card>
        <CardHeader className="grid grid-cols-2 gap-3">
          <div className="col-span-1">
            <CardDescription className="tracking-tight mb-1">
              Net Worth
            </CardDescription>
            <CardTitle>
              <p className="text-3xl font-medium">₱ 80,000</p>
            </CardTitle>
          </div>
          <div className="col-span-1">
            <CardDescription className="tracking-tight mb-1">
              ₱100K net worth projected to be reached
            </CardDescription>
            <CardTitle>
              <p className="text-3xl font-medium">2029</p>
            </CardTitle>
          </div>
        </CardHeader>

        <CardContent>
          <NetWorthGraph />
        </CardContent>
      </Card>

      <br />

      <Card>
        <CardHeader>
          <CardDescription>
            options: Assets | Liabilities | CashFlow | Funds
          </CardDescription>
        </CardHeader>

        <CardContent>
          <NetWorthGraph />
        </CardContent>
      </Card>
    </article>
  );
};

export default AccountPage;
