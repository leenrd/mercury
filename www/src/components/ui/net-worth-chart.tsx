"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", Value: 80 },
  { month: "February", Value: 200 },
  { month: "March", Value: 300 },
  { month: "April", Value: 190 },
  { month: "May", Value: 130 },
  { month: "June", Value: 140 },
  { month: "July", Value: 220 },
  { month: "August", Value: 550 },
  { month: "September", Value: 240 },
  { month: "October", Value: 210 },
  { month: "November", Value: 140 },
  { month: "December", Value: 140 },
];

const chartConfig = {
  Value: {
    label: "Net Value",
    color: "#22c55e",
  },
} satisfies ChartConfig;

export function NetWorthChart() {
  return (
    <>
      <ChartContainer
        config={chartConfig}
        className="aspect-auto h-[250px] w-full"
      >
        <AreaChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <defs>
            <linearGradient id="fillValue" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--color-Value)"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="var(--color-Value)"
                stopOpacity={0.1}
              />
            </linearGradient>
          </defs>
          <Area
            dataKey="Value"
            type="natural"
            fill="url(#fillValue)"
            fillOpacity={0.4}
            stroke="var(--color-Value)"
            stackId="a"
          />
        </AreaChart>
      </ChartContainer>
    </>
  );
}
