"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import React from "react";
import Stats from "./_partials/stats";
import { DataTable } from "./_partials/data-table";
import { columns } from "./_partials/columns";
import { TablePagination } from "@/components/partials/table-pagination";
import { useGetTransactions } from "@/hooks/use-transactions";

interface PostsProps {
  searchParams: { [key: string]: string | undefined };
}

const TransactionPage = ({ searchParams }: PostsProps) => {
  const currentPage = parseInt((searchParams.page as string) || "1");
  const postsPerPage = parseInt((searchParams.pageSize as string) || "5");

  const { data, isError, isLoading, error } = useGetTransactions(
    currentPage,
    postsPerPage
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error..., {error.message}</div>;
  }

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
          <DataTable columns={columns} data={data.transactions} />
          <br />
          <TablePagination
            page={currentPage}
            pageSize={postsPerPage}
            totalCount={data.pagination.total}
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
