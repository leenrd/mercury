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
import { chartData } from "../_data/data";
import { useGetAssets } from "@/hooks/use-assets";

const AssetTable = ({ className }: { className?: string }) => {
  const { data: assetsData, isError, isLoading } = useGetAssets();

  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return <div>Error...</div>;

  return (
    <div className={cn("py-10", className)}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Asset Class</TableHead>
            <TableHead>% of Asset</TableHead>
            <TableHead className="text-right">Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {chartData.map((data, i) => (
            <TableRow key={i}>
              <TableCell className="font-medium">
                {data.type.toUpperCase()}
              </TableCell>
              <TableCell>{data.quantity} ent</TableCell>
              <TableCell className="text-right">P250.00</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AssetTable;
