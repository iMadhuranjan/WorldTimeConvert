"use client";

import { DateTime } from "luxon";
import { timeZoneData } from "./../helper/utility"; // Adjust the path as needed

const TimezoneTable = ({ from, to }) => {
  // Helper function to get timezone region by abbreviation
  const getRegion = (abbr) =>
    timeZoneData.find(
      (zone) => zone.Abbreviation.toLowerCase() === abbr.toLowerCase()
    )?.Region;

  const fromRegion = getRegion(from);
  const toRegion = getRegion(to);

  if (!fromRegion || !toRegion) {
    return (
      <div className="p-5 bg-red-100 text-red-600 rounded">
        Invalid timezone data. Please check your input.
      </div>
    );
  }

  // Generate 24-hour time conversion table
  const generateTableData = () => {
    const rows = [];
    for (let hour = 0; hour < 24; hour++) {
      const fromTime = DateTime.fromObject(
        { hour, minute: 0 },
        { zone: fromRegion }
      );
      const toTime = fromTime.setZone(toRegion);

      // Add "Midnight" or "Noon" in parentheses for specific times in both columns
      let fromFormatted = fromTime.toFormat("hh:mm a") + ` ${from.toUpperCase()}`;
      if (fromTime.toFormat("hh:mm a") === "12:00 AM") {
        fromFormatted += " (Midnight)";
      } else if (fromTime.toFormat("hh:mm a") === "12:00 PM") {
        fromFormatted += " (Noon)";
      }

      let toFormatted = toTime.toFormat("hh:mm a") + ` ${to.toUpperCase()}`;
      if (toTime.toFormat("hh:mm a") === "12:00 AM") {
        toFormatted += " (Midnight)";
      } else if (toTime.toFormat("hh:mm a") === "12:00 PM") {
        toFormatted += " (Noon)";
      }

      rows.push({
        from: fromFormatted,
        to: toFormatted,
      });
    }
    return rows;
  };

  const tableData = generateTableData();

  return (
    <div className="w-full mx-auto my-5 p-5 border shadow-lg bg-white rounded-lg">
      <h3 className="text-2xl font-bold mb-3 text-center text-blue-600">
        {from.toUpperCase()} to {to.toUpperCase()} Chart
      </h3>
      <p className="text-lg text-gray-700 mb-5 text-center">
        Discover the complete {from.toUpperCase()} to {to.toUpperCase()} time
        conversion chart to seamlessly plan your activities across these time
        zones. This chart provides accurate time mappings for every hour of the
        day, ensuring you never miss a meeting, event, or important moment due
        to timezone differences.
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200 text-left">
          <thead>
            <tr className="bg-gray-100 text-amber-700 text-lg text-center">
              <th className="p-3 border border-gray-200">
                {from.toUpperCase()} Time
              </th>
              <th className="p-3 border border-gray-200">
                {to.toUpperCase()} Time
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-gray-100`}
              >
                <td className="p-3 border border-gray-200">{row.from}</td>
                <td className="p-3 border border-gray-200">{row.to}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TimezoneTable;
