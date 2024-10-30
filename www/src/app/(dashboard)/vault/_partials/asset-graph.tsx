"use client";

import { useGetAssets, useGetTotalAssetCount } from "@/hooks/use-assets";
import { cn } from "@/lib/utils";
import React from "react";

const AssetGraph = () => {
  const { data: assetTotal, isLoading, isError } = useGetTotalAssetCount();
  const { data: assets } = useGetAssets();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  interface Asset {
    type: string;
    value: string;
  }

  return (
    <>
      <div className="flex flex-col justify-between w-full">
        <p className="mt-2 flex items-baseline gap-2">
          <span className="text-xl text-gray-900 dark:text-gray-50">
            ₱ {assetTotal._sum.value}
          </span>
          <span className="text-sm text-gray-500">Total Value</span>
        </p>
        <div className="mt-4">
          <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
            Asset Allocation
          </p>
          <div className="mt-2 flex items-center gap-0.5">
            {assets.map((item: Asset) => (
              <div
                key={item.type}
                className={cn(`bg-yellow-500 h-1.5 rounded-full`)}
                style={{ width: `${item.value}%` }}
              />
            ))}
          </div>
        </div>
        <ul role="list" className="mt-5 space-y-2">
          {assets.map((item: Asset) => (
            <li key={item.type} className="flex items-center gap-2 text-xs">
              <span
                className={cn("bg-yellow-400 size-2.5 rounded-sm")}
                aria-hidden="true"
              />
              <span className="text-gray-900 dark:text-gray-50">
                {item.type}
              </span>
              <span className="text-gray-600 dark:text-gray-400">
                ({item.value} / {item.value}%)
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AssetGraph;
