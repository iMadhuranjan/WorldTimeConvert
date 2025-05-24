"use client";
import React, { useState, useEffect } from "react";

const AnalogClock = ({ timezone, timezoneName, offset, abbreviation }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const calculateRotation = (unit, maxUnit) => (unit / maxUnit) * 360;

  const getTimeInTimeZone = () => {
    try {
      return new Date(
        currentTime.toLocaleString("en-US", { timeZone: timezone })
      );
    } catch (error) {
      console.warn("Invalid timezone", error);
      return currentTime;
    }
  };

  const localTime = getTimeInTimeZone();
  const hours = localTime.getHours() % 12;
  const minutes = localTime.getMinutes();
  const seconds = localTime.getSeconds();

  const hourRotation = calculateRotation(hours + minutes / 60, 12);
  const minuteRotation = calculateRotation(minutes + seconds / 60, 60);
  const secondRotation = calculateRotation(seconds, 60);

  const offsetToWords = (offset) => {
    if (!offset) return "";

    const [sign, time] =
      offset[0] === "+" || offset[0] === "-"
        ? [offset[0], offset.slice(1)]
        : ["", offset];
    const [hours, minutes] = time.split(":").map(Number);

    const hourWord = hours === 1 ? "hour" : "hours";
    const minuteWord = minutes === 1 ? "minute" : "minutes";

    let result = "";

    if (hours) result += `${hours} ${hourWord}`;
    if (minutes) result += (hours ? " and " : "") + `${minutes} ${minuteWord}`;

    return sign === "+" ? `${result} ahead of` : `${result} behind of`;
  };

  return (
    <div className="flex gap-4 flex-col md:flex-row py-5 px-2 shadow-all-sides">

      <div className="w-full md:w-1/2 flex justify-center items-center flex-col gap-4">
        {" "}
        <div className="relative h-72 w-72 md:w-80 md:h-80 bg-blue-900 rounded-full shadow-lg flex items-center justify-center">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Clock Face */}
            <circle cx="50" cy="50" r="48" stroke="blue" fill="#1e3a8a" />
            <circle cx="50" cy="50" r="2" fill="#fff" />

            {/* Hour Marks */}
            {[...Array(12)].map((_, i) => {
              const angle = i * 30 * (Math.PI / 180);
              const x1 = 50 + Math.cos(angle) * 40;
              const y1 = 50 - Math.sin(angle) * 40;
              const x2 = 50 + Math.cos(angle) * 45;
              const y2 = 50 - Math.sin(angle) * 45;
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="white"
                  strokeWidth="2"
                />
              );
            })}

            {/* Minute Marks */}
            {[...Array(60)].map((_, i) => {
              const angle = i * 6 * (Math.PI / 180);
              const x1 = 50 + Math.cos(angle) * 43;
              const y1 = 50 - Math.sin(angle) * 43;
              const x2 = 50 + Math.cos(angle) * 45;
              const y2 = 50 - Math.sin(angle) * 45;
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="white"
                  strokeWidth="1"
                />
              );
            })}

            {/* Numbers */}
            {[...Array(12)].map((_, i) => {
              const angle = (i * 30 - 90) * (Math.PI / 180); // Adjusted angle for correct orientation
              const x = 50 + Math.cos(angle) * 35;
              const y = 50 + Math.sin(angle) * 35;
              return (
                <text
                  key={i}
                  x={x}
                  y={y + 2}
                  textAnchor="middle"
                  fontSize="5"
                  fill="white"
                >
                  {i === 0 ? 12 : i}
                </text>
              );
            })}

            {/* Hour Hand */}
            <line
              x1="50"
              y1="50"
              x2={50 + Math.cos((hourRotation - 90) * (Math.PI / 180)) * 20}
              y2={50 + Math.sin((hourRotation - 90) * (Math.PI / 180)) * 20}
              stroke="#ffd700"
              strokeWidth="3"
            />

            {/* Minute Hand */}
            <line
              x1="50"
              y1="50"
              x2={50 + Math.cos((minuteRotation - 90) * (Math.PI / 180)) * 30}
              y2={50 + Math.sin((minuteRotation - 90) * (Math.PI / 180)) * 30}
              stroke="white"
              strokeWidth="2"
            />

            {/* Second Hand */}
            <line
              x1="50"
              y1="50"
              x2={50 + Math.cos((secondRotation - 90) * (Math.PI / 180)) * 40}
              y2={50 + Math.sin((secondRotation - 90) * (Math.PI / 180)) * 40}
              stroke="red"
              strokeWidth="1"
            />
          </svg>
        </div>
        
        <p className="font-semibold text-base">
          {timezoneName} ({abbreviation.toUpperCase()})
        </p>
      </div>

      <div className="w-full md:w-1/2 mt-3 flex justify-center items-start flex-col gap-2 pl-4 md:pl-1">

        <h2 className="text-4xl font-extrabold mb-2 text-gray-800">
          {localTime.toDateString()}
        </h2>

        <h2 className="text-2xl font-semibold mb-2 text-gray-900">
          {localTime.toLocaleTimeString()}
        </h2>

        <p className=" mb-3 text-lg text-gray-700">
          {timezoneName} is{" "}
          <strong className="text-amber-800">{offsetToWords(offset)}</strong>{" "}
          Universal Time.
        </p>
      </div>
      
    </div>
  );
};

export default AnalogClock;
