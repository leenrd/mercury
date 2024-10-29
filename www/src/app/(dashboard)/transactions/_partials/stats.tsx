"use client";

import { CardDescription, CardTitle } from "@/components/ui/card";
import { useGetStats } from "@/hooks/use-transactions";
import React from "react";

const Stats = () => {
  const { data, isError, isLoading } = useGetStats();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  const Attributes = [
    {
      label: "Income",
      value: `₱${Math.floor(data.total_income._sum.value)}/m`,
    },
    {
      label: "Expenses",
      value: `₱${Math.floor(data.total_expense._avg.amount)}/m avg.`,
    },
    {
      label: "Target Expenses",
      value: "₱2500/m avg.",
    },
    {
      label: "Net Savings",
      value: `₱${Math.floor(data.total_savings._sum.value)}/m`,
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-3">
      {Attributes.map((item, i) => (
        <div key={i} className="col-span-1">
          <CardDescription>{item.label}</CardDescription>
          <CardTitle className="text-2xl font-medium">{item.value}</CardTitle>
        </div>
      ))}
    </div>
  );
};

export default Stats;
