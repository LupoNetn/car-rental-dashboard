import { ArrowDown, ArrowUp } from "lucide-react";
import React from "react";

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
      <div className="mt-0 flex flex-col md:items-center md:flex-row">
        <div className="p-8 h-screen bg-gray-50 flex-1">
          <div>
            <div className="max-sm:flex justify-between items-center">
              <h2 className="font-bold text-xl ">Today's Statistics</h2>
              <p className="max-sm:text-sm">Sat , 16 Aug 2025, 11:30 AM</p>
            </div>

            {/* stats card */}
            <div className="flex flex-col gap-2 mt-3 justify-center">
              {statData.map((data) => (
                <div className="p-3 bg-white rounded-md">
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
                      className={`text-xs ${data.gain ? "text-green-600" : "text-red-600"} flex items-center`}
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
                    <p className="text-gray-700 font-bold">${data.lastWeekamount}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-2"></div>
      </div>
    </>
  );
};

export default Dashboard;
