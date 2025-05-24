"use client";
import React, { useState, useEffect } from "react";
import { timeZoneData } from "./../helper/utility"; // Adjust the path as needed
import cityData from "../helper/Country"; // Adjust the path to the city data JSON
import Link from "next/link";
import Adsense6 from "@/Adsense/Adsense6";

const TimeZoneTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentTimes, setCurrentTimes] = useState({});

  // Function to validate and update current times for all time zones
  const updateTimes = () => {
    const updatedTimes = {};
    timeZoneData.forEach((zone) => {
      try {
        const formatter = new Intl.DateTimeFormat("en-US", {
          timeZone: zone.Region,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        });
        updatedTimes[zone.Abbreviation] = formatter.format(new Date());
      } catch (error) {
        console.warn(`Invalid time zone specified: ${zone.Region}`);
        updatedTimes[zone.Abbreviation] = "--:--";
      }
    });
    setCurrentTimes(updatedTimes);
  };

  useEffect(() => {
    updateTimes();
    const interval = setInterval(updateTimes, 1000); // Update every second
    return () => clearInterval(interval);
  }, []);

  // Filter the timezone data based on the search query
  const filteredData = timeZoneData.filter(
    (zone) =>
      zone.Abbreviation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      zone["Full Name"].toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-4">
      <h2 className=" text-[1.75rem] md:text-5xl font-extrabold mb-4 text-center text-amber-600">
        World Time Zone Table
      </h2>

      <p className="text-center text-base text-gray-600 mb-2">
        This table helps you quickly access information about different time
        zones around the world. The <strong>World Time Zone Table</strong>{" "}
        provides a comprehensive and easy-to-read overview of global time zones.
      </p>

      <p className="text-center text-base text-gray-600 mb-5">
        With real-time updates and detailed information on{" "}
        <strong>abbreviations, UTC offsets, and full names</strong>, it
        simplifies time zone conversions and enhances productivity across
        different regions.
      </p>

      <Adsense6 />
      <div className="overflow-x-auto rounded-lg shadow-all-sides">
        <table className="table-auto w-full border-collapse border-gray-200 text-sm md:text-base">
          <thead className="">
            <tr></tr>
            <tr className="bg-amber-50">
              <th className="border border-gray-300 px-4 py-2">Abbreviation</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">UTC Offset</th>
              <th className="border border-gray-300 px-4 py-2">Time</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((zone, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <Link
                      href={`/timezone/${zone.Abbreviation}`}
                      className="text-lg font-bold text-blue-600 hover:text-amber-600"
                    >
                      {" "}
                      {zone.Abbreviation}
                    </Link>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {zone["Full Name"]}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {zone.Offset}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {currentTimes[zone.Abbreviation] || "--:--"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center text-gray-600 py-4">
                  No results found for "{searchQuery}".
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TimeZoneTable;
