import { cn } from "@/lib/utils";
import React from "react";

const AssetGraph = () => {
  const value = "₱1.2M";
  const data = [
    {
      title: "Bank Accounts",
      value: "₱700.79K",
      percentage: 40,
      color: "bg-primary",
    },
    {
      title: "Stocks",
      value: "₱500.79K",
      percentage: 30,
      color: "bg-slate-400",
    },
    {
      title: "Bonds",
      value: "₱200.79K",
      percentage: 15,
      color: "bg-amber-500",
    },
    {
      title: "Mutual Funds",
      value: "₱200.79K",
      percentage: 15,
      color: "bg-orange-500",
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-between w-full">
        <p className="mt-2 flex items-baseline gap-2">
          <span className="text-xl text-gray-900 dark:text-gray-50">
            {value}
          </span>
          <span className="text-sm text-gray-500">Total Value</span>
        </p>
        <div className="mt-4">
          <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
            Asset Allocation
          </p>
          <div className="mt-2 flex items-center gap-0.5">
            {data.map((item) => (
              <div
                key={item.title}
                className={cn(item.color, `h-1.5 rounded-full`)}
                style={{ width: `${item.percentage}%` }}
              />
            ))}
          </div>
        </div>
        <ul role="list" className="mt-5 space-y-2">
          {data.map((item) => (
            <li key={item.title} className="flex items-center gap-2 text-xs">
              <span
                className={cn(item.color, "size-2.5 rounded-sm")}
                aria-hidden="true"
              />
              <span className="text-gray-900 dark:text-gray-50">
                {item.title}
              </span>
              <span className="text-gray-600 dark:text-gray-400">
                ({item.value} / {item.percentage}%)
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AssetGraph;
