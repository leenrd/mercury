import { Input } from "@/components/ui/input";
import React from "react";

const SearchBar = ({ table }) => {
  return (
    <div className="flex items-center py-4 flex-grow">
      <Input
        placeholder="Search by category..."
        value={(table.getColumn("category")?.getFilterValue() as string) ?? ""}
        onChange={(event) =>
          table.getColumn("category")?.setFilterValue(event.target.value)
        }
        className="max-w-sm"
      />
    </div>
  );
};

export default SearchBar;
