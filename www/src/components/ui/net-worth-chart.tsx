"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", Liabilities: 186, Assets: 80 },
  { month: "February", Liabilities: 305, Assets: 200 },
  { month: "March", Liabilities: 237, Assets: 120 },
  { month: "April", Liabilities: 73, Assets: 190 },
  { month: "May", Liabilities: 209, Assets: 130 },
  { month: "June", Liabilities: 214, Assets: 140 },
];

const chartConfig = {
  Liabilities: {
    label: "Liabilities",
    color: "#f59e0b",
  },
  Assets: {
    label: "Assets",
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
            <linearGradient id="fillLiabilities" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--color-Liabilities)"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="var(--color-Liabilities)"
                stopOpacity={0.1}
              />
            </linearGradient>
            <linearGradient id="fillAssets" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--color-Assets)"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="var(--color-Assets)"
                stopOpacity={0.1}
              />
            </linearGradient>
          </defs>
          <Area
            dataKey="Assets"
            type="natural"
            fill="url(#fillAssets)"
            fillOpacity={0.4}
            stroke="var(--color-Assets)"
            stackId="a"
          />
          <Area
            dataKey="Liabilities"
            type="natural"
            fill="url(#fillLiabilities)"
            fillOpacity={0.4}
            stroke="var(--color-Liabilities)"
            stackId="a"
          />
        </AreaChart>
      </ChartContainer>
    </>
  );
}
