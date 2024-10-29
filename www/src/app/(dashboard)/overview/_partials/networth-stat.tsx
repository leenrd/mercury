"use client";

import { CardHeader, CardDescription, CardTitle } from "@/components/ui/card";
import { ChevronDown, TrendingUp } from "lucide-react";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select-no-border";
import { useGetNetStat } from "@/hooks/use-net";

const NetWorthStat = () => {
  const { data: stat, isError: errStat, isLoading: loadStat } = useGetNetStat();

  const [targetNetSelection, setTargetNetSelection] = useState<string>("₱100K");
  const [yearBasedOnSelection, _] = useState<Record<string, number[]>>({
    // These numbers are static for now, this app is specially made for me anyways
    "₱100K": [2026, 23],
    "₱1M": [2033, 30],
    "₱56M/$1M": [2038, 35],
    "₱561.5M/$10M": [2043, 40],
    "₱5.6B/$100M": [2049, 46],
    "₱11.2B/$200M": [2058, 55],
  });

  if (errStat) {
    return <div>Failed to load</div>;
  }

  if (loadStat) {
    return <div>Loading...</div>;
  }

  return (
    <CardHeader className="grid grid-cols-2 items-end gap-3">
      <div className="col-span-1">
        <CardDescription className="tracking-tight mb-1">
          Net Worth
        </CardDescription>
        <CardTitle>
          <p className="text-3xl font-medium">₱ {stat.net_worth}</p>
        </CardTitle>
        <div className="flex items-center gap-2 text-xs mt-1 leading-none text-green-600">
          Trending {stat.net_worth_trend.toLowerCase()} this month{" "}
          <TrendingUp className="h-4 w-4" />
        </div>
      </div>

      <div className="col-span-1">
        <CardDescription className="tracking-tight mb-1 flex">
          <Select onValueChange={(value) => setTargetNetSelection(value)}>
            <SelectTrigger defaultValue={targetNetSelection}>
              {targetNetSelection}{" "}
              <ChevronDown
                className="h-4 w-4 mr-1 self-center stroke-primary/45 cursor-pointer"
                strokeWidth={2.25}
              />{" "}
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="₱100K">₱100K</SelectItem>
              <SelectItem value="₱1M">₱1M</SelectItem>
              <SelectItem value="₱56M/$1M">₱56M / $1M</SelectItem>
              <SelectItem value="₱561.5M/$10M">₱561.5M / $10M</SelectItem>
              <SelectItem value="₱5.6B/$100M">₱5.6B / $100M</SelectItem>
              <SelectItem value="₱11.2B/$200M">₱11.2B / $200M</SelectItem>
            </SelectContent>
          </Select>
          net worth projected to be reached
        </CardDescription>
        <CardTitle>
          <p className="text-3xl font-medium">
            {yearBasedOnSelection[targetNetSelection][0]}{" "}
            <span className="text-primary/50 text-sm">
              / {yearBasedOnSelection[targetNetSelection][1]}yrs. old
            </span>
          </p>
        </CardTitle>
      </div>
    </CardHeader>
  );
};

export default NetWorthStat;
