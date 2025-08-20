import { ArrowDown, ArrowUp, Bell, Filter, Search } from "lucide-react";
import PieChartComponent from "./PieChart.jsx";
import React from "react";
import CarAreaChart from "./CarAreaChart.jsx";

const statData = [
  {
    type: "Income",
    date: "today",
    amount: 9460.0,
    percent: 1.5,
    gain: false,
    lastWeekamount: 25858.0,
    yesterdayamount: 9940,
  },
  {
    type: "Expenses",
    date: "today",
    amount: 5660.0,
    percent: 2.5,
    gain: true,
    lastWeekamount: 22658.0,
    yesterdayamount: 6240,
  },
];

const Dashboard = () => {
  return (
    <>
      {/* 
        Layout behavior:
        - Mobile (default): stacked
        - Tablet (md): stacked full width
        - Desktop (lg+): row layout, but give the right column more breathing space
      */}
      <div className="mt-0 flex flex-col lg:flex-row">
        {/* Today's Statistics Section */}
        <div
          className="
            p-8 bg-gray-50 
            md:w-full         /* Tablet: full width */
            lg:flex-1         /* Desktop: take ~65% width */
          "
        >
          <div>
            <div className="max-sm:flex justify-between items-center">
              <h2 className="font-bold text-xl ">Today's Statistics</h2>
              <p className="max-sm:text-sm">Sat , 16 Aug 2025, 11:30 AM</p>
            </div>

            {/* stats card */}
            <div className="flex flex-col gap-2 mt-3 justify-center">
              {statData.map((data, i) => (
                <div key={i} className="p-3 bg-white rounded-md">
                  <div className="flex justify-between">
                    <p className="text-md text-gray-500">{data.type}</p>
                    <div className="rounded-2xl text-sm bg-gray-300 text-gray-900 p-1">
                      <p>{data.date}</p>
                    </div>
                  </div>
                  <hr className="text-gray-200 w-[80%] m-5 mx-auto" />
                  <div className="mt-5 flex items-end justify-between">
                    <p className="font-bold text-2xl">${+data.amount}</p>
                    <div
                      className={`text-xs ${
                        data.gain ? "text-green-600" : "text-red-600"
                      } flex items-center`}
                    >
                      {data.gain ? (
                        <ArrowUp size={15} />
                      ) : (
                        <ArrowDown size={15} />
                      )}
                      <p>{data.percent}%</p>
                    </div>
                  </div>
                  <p className="text-base mt-4 text-gray-500">
                    Compared to ${data.yesterdayamount} yesterday
                  </p>
                  <div className="flex justify-between items-center mt-5">
                    <p className="font-bold text-gray-700">
                      Last Week {data.type}
                    </p>
                    <p className="text-gray-700 font-bold">
                      ${data.lastWeekamount}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <PieChartComponent />
            </div>
          </div>
        </div>

        {/* Car Activity + Other Panels */}
        <div
          className="
            p-4 
            md:w-full         /* Tablet: full width */
            lg:flex-2         /* Desktop: take ~45% width instead of being squished */
          "
        >
          {/* Top Bar */}
          <div className="flex justify-center md:justify-end gap-2 items-center">
            <Bell color="gray" fill="gray" />

            {/* Search Bar (fixed for responsiveness) */}
            <div className="relative w-[70%] sm:w-[60%] md:w-[50%]">
              {/* Input with left padding for icon */}
              <input
                type="text"
                className="w-full p-2 pl-10 border border-gray-400 rounded-md outline-none"
                placeholder="Search here..."
              />
              {/* Icon absolutely inside input */}
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                size={18}
              />
            </div>
          </div>

          {/* Check For Car Availability */}
          <div className="mt-8 md:mt-15 bg-white/50 py-10 px-3 rounded-md shadow-lg">
            <h3 className="font-bold text-xl">Car Activity</h3>

            <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-3">
              {/* Car Number */}
              <select className="p-2 border border-gray-400 rounded-md">
                <option>Select Car Number</option>
                <option>ABC-123</option>
                <option>XYZ-456</option>
              </select>

              {/* Time */}
              <select className="p-2 border border-gray-400 rounded-md">
                <option>Select Time</option>
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Evening</option>
              </select>

              {/* Date */}
              <input
                type="date"
                placeholder="select date"
                className="p-2 border border-gray-400 rounded-md"
              />

              {/* Button */}
              <button className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Check Cars
              </button>
            </div>
          </div>

          {/* Live Car Status */}
          <div className="mt-8 md:mt-15 bg-white/50 py-10 px-3 rounded-md shadow-lg">
            <div className="flex justify-between">
              <h3 className="font-bold text-xl">User Car Status</h3>
              <button className="flex gap-2">
                <Filter />
                <p className="text-md">Filter</p>
              </button>
            </div>

            {/* Car Status Table */}
            <div className="overflow-x-auto">
              <table className="mx-auto w-full mt-8 border-collapse text-center">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-3 border-b border-gray-300">No</th>
                    <th className="p-3 border-b border-gray-300">Car No</th>
                    <th className="p-3 border-b border-gray-300">Driver</th>
                    <th className="p-3 border-b border-gray-300">Status</th>
                    <th className="p-3 border-b border-gray-300">Timing</th>
                    <th className="p-3 border-b border-gray-300"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border-b border-gray-200">1</td>
                    <td className="p-3 border-b border-gray-200">AB123</td>
                    <td className="p-3 border-b border-gray-200">John Doe</td>
                    <td className="p-3 border-b border-gray-200 text-green-600">
                      Active
                    </td>
                    <td className="p-3 border-b border-gray-200">10:30 AM</td>
                    <td className="p-3 border-b border-gray-200">
                      <button className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                        Details
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-gray-200">2</td>
                    <td className="p-3 border-b border-gray-200">CD456</td>
                    <td className="p-3 border-b border-gray-200">Jane Smith</td>
                    <td className="p-3 border-b border-gray-200 text-red-500">
                      Inactive
                    </td>
                    <td className="p-3 border-b border-gray-200">11:00 AM</td>
                    <td className="p-3 border-b border-gray-200">
                      <button className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                        Details
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-gray-200">3</td>
                    <td className="p-3 border-b border-gray-200">CK555</td>
                    <td className="p-3 border-b border-gray-200">Mary Jane</td>
                    <td className="p-3 border-b border-gray-200 text-blue-500">
                      Pending
                    </td>
                    <td className="p-3 border-b border-gray-200">12:00 PM</td>
                    <td className="p-3 border-b border-gray-200">
                      <button className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                        Details
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <CarAreaChart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
