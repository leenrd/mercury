"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { cn } from "@/lib/utils";
import { chartData } from "../_data/data";
import {
  useGetLiabilities,
  useGetTotalLiabilitiesCount,
} from "@/hooks/use-liabilities";

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export default function LiabilityGraph({ className }: { className?: string }) {
  const { data: totalLiabilitiesCount, isError: countError } =
    useGetTotalLiabilitiesCount();

  const {
    data: liabilitiesData,
    isError: dataError,
    isLoading,
  } = useGetLiabilities();

  interface Liability {
    type: string;
    value: number;
  }

  if (isLoading) return <div>Loading...</div>;
  if (dataError) return <div>Error...</div>;
  if (countError) return <div>Error...</div>;

  const chartWithColors = liabilitiesData.map((item: Liability) => {
    const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)`;
    return { ...item, fill: randomColor };
  });

  return (
    <ChartContainer
      config={chartConfig}
      className={cn("aspect-square max-h-[400px]", className)}
    >
      <PieChart>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Pie
          data={chartWithColors}
          dataKey="value"
          nameKey="type"
          innerRadius={120}
          strokeWidth={5}
        >
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className="fill-foreground text-3xl font-bold"
                    >
                      ₱{totalLiabilitiesCount._sum.value}
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 24}
                      className="fill-muted-foreground"
                    >
                      Liabilities
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </Pie>
      </PieChart>
    </ChartContainer>
  );
}
