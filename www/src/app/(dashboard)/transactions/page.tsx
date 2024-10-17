import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import React from "react";
import Stats from "./_partials/stats";
import { DataTable } from "./_partials/data-table";
import { columns } from "./_partials/columns";
import { Transactions } from "./_data/sample";

const TransactionPage = () => {
  return (
    <article>
      <Card className="px-3">
        <CardHeader className="flex-col gap-5">
          <p>Search transactions [ ]</p>
          <Stats />
        </CardHeader>

        <br />

        <CardContent>
          <DataTable columns={columns} data={Transactions} />
        </CardContent>
      </Card>
    </article>
  );
};

export default TransactionPage;
