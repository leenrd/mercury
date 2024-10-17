"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Transaction } from "../_data/sample";

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "merchant",
    header: "Merchant",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "account.name",
    header: "Account",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
];
