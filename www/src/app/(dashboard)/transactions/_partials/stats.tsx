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
      value: "₱20,800/quarter",
    },
    {
      label: "Expenses",
      value: "₱1,500/m avg.",
    },
    {
      label: "Net Savings",
      value: "₱5,500/m",
    },
  ];

  return (
    <div className="flex justify-between">
      {Attributes.map((item, i) => (
        <div key={i}>
          <CardDescription>{item.label}</CardDescription>
          <CardTitle className="text-2xl font-medium">{item.value}</CardTitle>
        </div>
      ))}
    </div>
  );
};

export default Stats;
