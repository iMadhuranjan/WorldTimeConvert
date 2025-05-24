"use client";

import { useState } from "react";
import { DateTime } from "luxon";
import { timeZoneData } from "./../../helper/utility"; // Adjust the path as needed
import { Copy } from "lucide-react"; // Import Lucide Icon
import TimeZoneAllLinks from "@/components/TimeZoneLink";
import AdPlaceholder from "@/components/AdBlock";
import Adsense4 from "@/Adsense/Adsense4";

const TimezoneConverter = () => {
  const [from, setFrom] = useState("IST"); // Default "from" timezone
  const [to, setTo] = useState("UTC"); // Default "to" timezone
  const [selectedTime, setSelectedTime] = useState(""); // User-entered time
  const [result, setResult] = useState(null); // Conversion result

  const handleSubmit = (e) => {
    e.preventDefault();

    const fromZone = timeZoneData.find(
      (zone) => zone.Abbreviation.toLowerCase() === from.toLowerCase()
    )?.Region;
    const toZone = timeZoneData.find(
      (zone) => zone.Abbreviation.toLowerCase() === to.toLowerCase()
    )?.Region;

    if (fromZone && toZone) {
      let timeToConvert = DateTime.now().setZone(fromZone); // Default to current time

      // If a specific time is entered, use it
      if (selectedTime) {
        const [hour, minute] = selectedTime.split(":");
        timeToConvert = DateTime.fromObject(
          { hour: parseInt(hour), minute: parseInt(minute) },
          { zone: fromZone }
        );
      }

      const convertedTime = timeToConvert.setZone(toZone);

      setResult({
        from: {
          time: timeToConvert.toFormat("hh:mm a"),
          date: timeToConvert.toFormat("MMMM dd yyyy"),
          timezone: from,
        },
        to: {
          time: convertedTime.toFormat("hh:mm a"),
          date: convertedTime.toFormat("MMMM dd yyyy"),
          timezone: to,
        },
      });
    } else {
      alert("Invalid timezone selected!");
    }
  };

  const [copyFeedback, setCopyFeedback] = useState("Copy to Clipboard");

  const handleCopy = () => {
    const textToCopy = `
      From Timezone: ${result.from.timezone}
      Time: ${result.from.time}
      Date: ${result.from.date}

      To Timezone: ${result.to.timezone}
      Time: ${result.to.time}
      Date: ${result.to.date}
    `;

    // Copy the result to clipboard
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopyFeedback("Copied!"); // Show "Copied!" feedback
      setTimeout(() => setCopyFeedback("Copy to Clipboard"), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div className="">
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-center text-amber-600">
        World Time Converter
      </h1>

      <p className="text-gray-700 text-lg mt-4 text-center pb-3">
        Discover the easiest way to convert time zones with our{" "}
        <strong>
          <a href="http://worldtimeconvert.com/">World Time Converter</a>
        </strong>
        . Whether you're scheduling meetings or exploring global time zones,
        this tool ensures accurate and reliable time conversions for all your
        needs.
      </p>
      <Adsense4 />
      <form
        className="w-full bg-white shadow-all-sides rounded-lg p-6 space-y-3"
        onSubmit={handleSubmit}
      >
        {/* From and To Time Zones in One Line */}
        <div className="flex flex-col md:flex-row md:space-x-4">
          {/* From Time Zone */}
          <div className="flex-1 flex flex-col my-3">
            <label
              htmlFor="from"
              className="text-lg font-semibold text-gray-700 mb-1"
            >
              From Time Zone
            </label>
            <select
              id="from"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="p-3 border rounded-lg focus:ring-2 focus:ring-amber-500 w-full max-w-full overflow-auto"
            >
              {timeZoneData.map((zone) => (
                <option
                  key={zone.Abbreviation}
                  value={zone.Abbreviation}
                  className="bg-gray-50 text-sm"
                >
                  {zone["Full Name"]} ({zone.Abbreviation})
                </option>
              ))}
            </select>
          </div>

          {/* To Time Zone */}
          <div className="flex-1 flex flex-col my-3">
            <label
              htmlFor="to"
              className="text-lg font-semibold text-gray-700 mb-1"
            >
              To Time Zone
            </label>
            <select
              id="to"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="p-3 border rounded-lg focus:ring-2 focus:ring-amber-500"
            >
              {timeZoneData.map((zone) => (
                <option
                  key={zone.Abbreviation}
                  value={zone.Abbreviation}
                  className="bg-gray-50 text-sm"
                >
                  {zone["Full Name"]} ({zone.Abbreviation})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Time Picker and Submit Button in One Line */}
        <div className="flex flex-col md:flex-row md:items-end md:space-x-4">
          {/* Time Picker */}
          <div className="flex-1 flex flex-col my-3">
            <label
              htmlFor="time"
              className="text-lg font-semibold text-gray-700 mb-1"
            >
              Select Time
            </label>
            <input
              id="time"
              type="time"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="p-3 border rounded-lg focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* Submit Button */}
          <div className="mt-4 mb-3 md:mt-0">
            <button
              type="submit"
              className="w-full md:w-auto bg-amber-600 text-white text-lg font-semibold py-3 px-6 rounded-lg hover:bg-amber-700 transition-all"
            >
              Convert Time
            </button>
          </div>
        </div>
      </form>

      {/* Result Section */}
      <Adsense4 />
      {result && (
        <div className="mt-10 w-full bg-white shadow-all-sides rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center text-center">
            {/* From Time Zone */}
            <div className="border-r md:border-r border-gray-200">
              <h3 className="text-amber-600 text-xl font-bold mb-2">
                {result.from.timezone}
              </h3>
              <p className="text-4xl font-bold">{result.from.time}</p>
              <p className="text-gray-600">{result.from.date}</p>
            </div>

            {/* To Time Zone */}
            <div>
              <h3 className="text-amber-600 text-xl font-bold mb-2">
                {result.to.timezone}
              </h3>
              <p className="text-4xl font-bold">{result.to.time}</p>
              <p className="text-gray-600">{result.to.date}</p>
            </div>
          </div>

          {/* Copy Button */}
          <div className="flex justify-center mt-6 flex-1">
            <button
              onClick={handleCopy}
              className="flex w-full items-center gap-2 bg-amber-100 font-bold text-black border border-amber-500 px-4 py-2 rounded-sm shadow-md hover:bg-yellow-300 focus:ring-2 focus:ring-amber-500 transition-all"
            >
              <Copy className="w-5 h-5" />
              {copyFeedback}
            </button>
          </div>
        </div>
      )}

      <Adsense4 />
      <TimeZoneAllLinks />
      <Adsense4 />
    </div>
  );
};

export default TimezoneConverter;
