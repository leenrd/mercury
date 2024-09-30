import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import React from "react";
import Stats from "./_partials/stats";

const TransactionPage = () => {
  return (
    <article>
      <Card className="px-3">
        <CardHeader className="flex-col gap-5">
          <p>Search transactions [ ]</p>
          <Stats />
        </CardHeader>

        <CardContent>Table of transactions here</CardContent>
      </Card>
    </article>
  );
};

export default TransactionPage;
