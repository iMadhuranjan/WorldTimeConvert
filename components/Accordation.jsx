"use client";

import { useEffect, useState } from "react";
import { DateTime } from "luxon";
import { timeZoneData } from "./../helper/utility"; // Adjust the path as needed

const TimezoneConverter = ({ from, to }) => {
  const [currentTime, setCurrentTime] = useState({
    fromTime: null,
    toTime: null,
    timeDifference: null,
  });

  // Helper function to get timezone info by abbreviation
  const getTimezoneInfo = (abbr) => {
    return timeZoneData.find(
      (zone) => zone.Abbreviation.toLowerCase() === abbr.toLowerCase()
    );
  };

  // Fetch timezone data for "from" and "to"
  const fromZone = getTimezoneInfo(from);
  const toZone = getTimezoneInfo(to);

  if (!fromZone || !toZone) {
    return (
      <div className="p-5 bg-red-100 text-red-600 rounded">
        Invalid timezone data. Please check your input. <br />
        From: {from} | To: {to}
      </div>
    );
  }

  const calculateTimeDifference = (fromRegion, toRegion) => {
    const now = DateTime.now();
    const fromOffset = now.setZone(fromRegion).offset; // Offset in minutes for "from"
    const toOffset = now.setZone(toRegion).offset; // Offset in minutes for "to"
    const diffInMinutes = toOffset - fromOffset; // Difference between "to" and "from"

    const hours = Math.floor(Math.abs(diffInMinutes) / 60);
    const minutes = Math.abs(diffInMinutes) % 60;

    return {
      hours,
      minutes,
      ahead: diffInMinutes > 0, // Determine if "to" is ahead of "from"
    };
  };

  useEffect(() => {
    const updateTime = () => {
      const now = DateTime.now();
      const fromTime = now
        .setZone(fromZone.Region)
        .toFormat("MMMM dd yyyy, hh:mm:ss a");
      const toTime = now
        .setZone(toZone.Region)
        .toFormat("MMMM dd yyyy, hh:mm:ss a");
      const timeDifference = calculateTimeDifference(
        fromZone.Region,
        toZone.Region
      );

      setCurrentTime({ fromTime, toTime, timeDifference });
    };

    updateTime(); // Initial update
    const intervalId = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [fromZone.Region, toZone.Region]);

  const { fromTime, toTime, timeDifference } = currentTime;

  return (
    <div className="w-full mx-auto my-5 p-5 border shadow-all-sides bg-white">
      <div className="mb-5">
        <h3 className="text-2xl font-bold mb-1">
          How to Convert {from.toUpperCase()} to {to.toUpperCase()}?
        </h3>
        <ol className="list-decimal list-inside space-y-1 text-gray-700 pl-2">
          <li>
            Select a time in the {from.toUpperCase()} field (on the left) to see
            its equivalent in {to.toUpperCase()} (on the right).
          </li>
          <li>The {to.toUpperCase()} time will update instantly.</li>
          <li>
            Need to check a different day & Time? Simply click the date or Time
            field to adjust it!
          </li>
        </ol>
      </div>

      <div className="mb-5">
        <h3 className="text-2xl font-bold mb-1">
          What is the current {from.toUpperCase()} time with seconds right now?
        </h3>
        <p className="text-lg">
          The current {from.toUpperCase()} time with seconds is{"  "}
          <strong className="text-amber-700">{fromTime || "Loading..."}</strong>
        </p>
      </div>

      <div className="mb-5">
        <h3 className="text-2xl font-bold mb-1">
          What is the current {to.toUpperCase()} time with seconds right now?
        </h3>
        <p className="text-lg">
          The current {to.toUpperCase()} time with seconds is{"  "}
          <strong className="text-amber-700">{toTime || "Loading..."}</strong>
        </p>
      </div>

      <div className="mb-5">
        <h4 className="text-2xl font-bold mb-1">
          What is the time difference between {from.toUpperCase()} and{" "}
          {to.toUpperCase()} time zones?
        </h4>
        <p className="text-gray-700 text-lg">
          The {fromZone["Full Name"]} ({from.toUpperCase()}) is{" "}
          <strong className="text-red-700">
            {timeDifference
              ? `${timeDifference.hours} hour${
                  timeDifference.hours !== 1 ? "s" : ""
                }${
                  timeDifference.minutes > 0
                    ? ` and ${timeDifference.minutes} minute${
                        timeDifference.minutes !== 1 ? "s" : ""
                      }`
                    : ""
                } ${timeDifference.ahead ? "behind of" : "ahead of"}`
              : "exactly equal to"}
          </strong>{" "}
          the {toZone["Full Name"]} ({to.toUpperCase()}).
        </p>
      </div>

      <div className="mb-5">
        <h4 className="text-2xl font-bold mb-1">
          What are the peak business hours in {from.toUpperCase()} for
          scheduling?
        </h4>
        <p className="text-lg text-gray-700">
          The peak business hours in {fromZone["Full Name"]} (
          {from.toUpperCase()}) are typically between{" "}
          <strong className="text-green-700">9:00 AM and 6:00 PM</strong>.
          Scheduling meetings during this time ensures maximum availability and
          convenience.
        </p>
      </div>

      <div className="mb-5">
        <h4 className="text-2xl font-bold mb-1">
          What is the standard offset of {from.toUpperCase()} from UTC?
        </h4>
        <p className="text-lg text-gray-700">
          The {fromZone["Full Name"]} ({from.toUpperCase()}) has a standard
          offset of{" "}
          <strong className="text-blue-700">{fromZone.Offset} hours</strong>{" "}
          from Coordinated Universal Time (UTC).
        </p>
      </div>

      <div className="mb-5">
        <h4 className="text-2xl font-bold mb-1">
          How can I check the live time in {to.toUpperCase()} from anywhere in
          the world?
        </h4>
        <p className="text-lg text-gray-700">
          Using this tool, you can check the live time in {toZone["Full Name"]}{" "}
          ({to.toUpperCase()}) anytime by selecting the desired time zone. The
          tool updates automatically for accurate results.
        </p>
      </div>

      <div className="mb-5">
        <h4 className="text-2xl font-bold mb-1">
          Why should you trust this website for accurate timezone conversions?
        </h4>
        <p className="text-lg text-gray-700">
          We use the{" "}
          <strong className="text-amber-700">
            {" "}
            <a href="https://www.iana.org/" target="_blank"> IANA Time Zone Database</a>{" "}
          </strong>{" "}
          for all our timezone calculations. The IANA database is the most
          reputable and globally recognized source for accurate and up-to-date
          timezone information, ensuring that our data reflects geopolitical
          changes and daylight saving adjustments.
        </p>
        <p className="text-lg text-gray-700 mt-3">
          Unlike many other websites that rely on static offsets, which can lead
          to inaccuracies, our platform leverages the{" "}
          <strong className="text-amber-700">Luxon library</strong> and the{" "}
          <strong className="text-amber-700">Intl API</strong> to dynamically
          handle timezone conversions with precision. We regularly update our
          timezone data, so you can be confident that our results are always
          accurate, no matter where you are in the world.
        </p>
        <p className="text-lg text-gray-700 mt-3">
          By combining trusted data sources and advanced technology, we ensure
          you receive 100% accurate and reliable timezone information every
          time.
        </p>
      </div>
    </div>
  );
};

export default TimezoneConverter;
