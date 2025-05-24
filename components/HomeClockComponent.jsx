"use client";
import React, { useState, useEffect } from "react";
 import { DateTime } from "luxon";
import { Calendar } from "lucide-react";
import StylishAnalogClock from "./MinimalAnalog";

export default function HomeClockComponent() {
  const [localTime, setLocalTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setLocalTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-stretch lg:space-x-4 space-y-4 lg:space-y-0 p-4 shadow-all-sides">
      {/* First half - Digital Clock */}
     
      <div className="flex flex-col items-center justify-center p-1 lg:w-1/2 w-full">
      <h2 className="text-2xl md:text-3xl mb-3 font-semibold "> Your Current TimeZone </h2>

        <div className="bg-white shadow-lg rounded-lg w-full">
          {/* Header with Timezone */}
          <div className="bg-orange-500 text-white text-center py-4">
            <h2 className="text-2xl font-semibold">
              {Intl.DateTimeFormat().resolvedOptions().timeZone}
            </h2>
          </div>

          {/* Time and Date */}
          <div className="p-8 text-center">
            <div className="flex justify-center items-center space-x-3">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
                {DateTime.now().toLocaleString(DateTime.TIME_WITH_SECONDS)}
              </h2>
            </div>
            <div className="flex gap-3 font-bold mt-4 items-center justify-center">
              <Calendar />
              <p className="text-xl text-gray-700">
                {DateTime.now().toLocaleString(DateTime.DATE_FULL)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second half - Analog Clock */}
      <div className="flex flex-col lg:w-1/2 w-full justify-center items-center">
        <StylishAnalogClock time={localTime} />
      </div>
    </div>
  );
}
