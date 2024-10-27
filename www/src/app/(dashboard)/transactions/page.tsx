import { Card, CardHeader, CardContent } from "@/components/ui/card";
import React from "react";
import Stats from "./_partials/stats";
import { DataTable } from "./_partials/data-table";
import { columns } from "./_partials/columns";
import { Transactions } from "./_data/sample";
import { TablePagination } from "@/components/partials/table-pagination";

interface PostsProps {
  searchParams: { [key: string]: string | undefined };
}

const TransactionPage = ({ searchParams }: PostsProps) => {
  const currentPage = parseInt((searchParams.page as string) || "1");
  const postsPerPage = parseInt((searchParams.pageSize as string) || "5");

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
          <br />
          <TablePagination
            page={currentPage}
            pageSize={postsPerPage}
            // temp total count
            totalCount={10}
            pageSizeSelectOptions={{
              pageSizeOptions: [5, 10, 25, 50],
            }}
          />
        </CardContent>
      </Card>
    </article>
  );
};

export default TransactionPage;
