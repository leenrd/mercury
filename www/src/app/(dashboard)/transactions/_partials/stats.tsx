import { CardDescription, CardTitle } from "@/components/ui/card";
import React from "react";

const Stats = () => {
  const Attributes = [
    {
      label: "Income",
      value: "₱22,000/m",
    },
    {
      label: "Expenses",
      value: "₱4,800/m avg.",
    },
    {
      label: "Target Expenses",
      value: "₱2,500/m avg.",
    },
    {
      label: "Net Savings",
      value: "₱50,000/m",
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
