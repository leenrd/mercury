"use client";

import { CardContent } from "@/components/ui/card";
import React from "react";
import { NetWorthChart } from "@/components/ui/net-worth-chart";

const NetWorthGraph = () => {
  return (
    <CardContent>
      <NetWorthChart />
    </CardContent>
  );
};

export default NetWorthGraph;
