import { Card, CardHeader, CardContent } from "@/components/ui/card";
import React from "react";
import Stats from "./_partials/stats";
import { DataTable } from "./_partials/data-table";
import { columns } from "./_partials/columns";
import { Transactions } from "./_data/sample";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import AddTransactionSheet from "./_partials/add-transaction-sheet";

const TransactionPage = () => {
  return (
    <article>
      <Card className="px-3">
        <CardHeader className="flex-col gap-5">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-xl">Transactions</h3>
          </div>
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
