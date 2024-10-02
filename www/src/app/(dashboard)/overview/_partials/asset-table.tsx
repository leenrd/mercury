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

const AssetTable = ({ className }: { className?: string }) => {
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
                {data.browser.toUpperCase()}
              </TableCell>
              <TableCell>{data.visitors} %</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AssetTable;
