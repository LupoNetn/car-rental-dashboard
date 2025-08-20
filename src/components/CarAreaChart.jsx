import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// ✅ Example car activity data
// Each object represents a time slot with active/inactive cars
const carData = [
  { time: "8 AM", active: 5, inactive: 2 },
  { time: "10 AM", active: 8, inactive: 1 },
  { time: "12 PM", active: 6, inactive: 4 },
  { time: "2 PM", active: 9, inactive: 2 },
  { time: "4 PM", active: 7, inactive: 3 },
  { time: "6 PM", active: 10, inactive: 1 },
];

const CarAreaChart = () => {
  return (
    <div className="mt-8 bg-white/50 p-6 rounded-xl shadow-lg">
      {/* Chart title */}
      <h3 className="font-bold text-xl mb-4">Car Usage Overview</h3>

      {/* Responsive container makes chart auto-fit parent width */}
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={carData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          {/* Background grid lines */}
          <CartesianGrid strokeDasharray="3 3" />

          {/* X-Axis = time labels */}
          <XAxis dataKey="time" />

          {/* Y-Axis = number of cars */}
          <YAxis />

          {/* Tooltip = hover details */}
          <Tooltip />

          {/* Area for active cars */}
          <Area
            type="monotone"
            dataKey="active"
            stroke="#4F46E5"
            fill="#6366F1"
            fillOpacity={0.3}
          />

          {/* Area for inactive cars */}
          <Area
            type="monotone"
            dataKey="inactive"
            stroke="#DC2626"
            fill="#F87171"
            fillOpacity={0.3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CarAreaChart;
