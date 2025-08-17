import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

// 👇 Example data for the pie chart
// Each object represents one slice of the pie
const data = [
  { name: "Hired", value: 40 },
  { name: "Cancelled", value: 25 },
  { name: "Pending", value: 35 },
];

// 👇 Colors for each slice (green for hired, red for cancelled, yellow for pending)
const COLORS = ["#4CAF50", "#F44336", "#FFC107"];

// 👇 Used for converting degrees to radians (since Math.cos/Math.sin use radians)
const RADIAN = Math.PI / 180;

// 👇 Function that renders custom labels inside the slices (the percentages)
// It receives props like the slice position, angle, and percentage
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  // Calculate the radius (middle point between inner and outer radius)
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;

  // Calculate X and Y position for the text label using angle + radius
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x} // X coordinate of label
      y={y} // Y coordinate of label
      fill="white" // White text so it’s visible on colored slices
      textAnchor={x > cx ? "start" : "end"} // Align left/right depending on position
      dominantBaseline="central" // Vertically center the text
      fontSize={12} // Keep text readable
    >
      {/* Convert decimal percent (like 0.4) into whole percentage (40%) */}
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function PieChartComponent() {
  return (
    // 👇 Main container for the chart
    // - White background
    // - Rounded corners
    // - Responsive width
    // - Centers content
    <div className="bg-white mt-5 rounded-md p-4 w-full max-w-lg mx-auto flex flex-col items-center">
      {/* 👇 Chart wrapper with responsive height (adjusts for different screens) */}
      <div className="w-full h-64 sm:h-72 md:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data} // Data passed to the pie chart
              cx="50%" // Center X position of chart
              cy="50%" // Center Y position of chart
              labelLine={false} // Hide lines from chart to label
              label={renderCustomizedLabel} // Use our custom label renderer
              outerRadius="80%" // Size of the pie
              fill="#8884d8" // Default fill (gets overridden by <Cell>)
              dataKey="value" // Which key in `data` to use for slice size
            >
              {/* 👇 Create slices and apply matching colors */}
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* 👇 Summary / Legend below the chart */}
      <div className="mt-6 w-full flex flex-wrap justify-center gap-6">
        {data.map((entry, index) => (
          <div key={entry.name} className="flex items-center gap-2">
            {/* Tiny colored circle that matches slice color */}
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            />
            {/* Show label (Hired/Cancelled/Pending) */}
            <span className="text-sm font-medium text-gray-700">
              {entry.name}:
            </span>
            {/* Show raw value (number of items) */}
            <span className="text-sm text-gray-600">{entry.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
