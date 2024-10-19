"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Transaction } from "../_data/sample";
import { Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import Action from "./action";

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
  {
    id: "action",
    header: () => <div className="text-center">Actions</div>,
    cell: ({ row }) => {
      return (
        <div className="text-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant={"outline"} size={"icon"}>
                <Settings2 size={16} />
              </Button>
            </SheetTrigger>
            <Action />
          </Sheet>
        </div>
      );
    },
  },
];
