"use client";

import { cn } from "@/lib/utils";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetLiabilities } from "@/hooks/use-liabilities";

const LiabilityTable = ({ className }: { className?: string }) => {
  const { data: liabilitiesData, isError, isLoading } = useGetLiabilities();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  interface LiabilityT {
    type: string;
    value: number;
  }

  return (
    <div className={cn("py-10", className)}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Asset Class</TableHead>
            <TableHead className="text-right">Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {liabilitiesData?.map((data: LiabilityT, i: number) => (
            <TableRow key={i}>
              <TableCell className="font-medium">
                {data.type.toUpperCase()}
              </TableCell>
              <TableCell className="text-right">₱ {data.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default LiabilityTable;
