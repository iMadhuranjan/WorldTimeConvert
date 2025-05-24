"use client";
import React from "react";

const StylishAnalogClock = ({ time }) => {
  const calculateRotation = (unit, maxUnit) => (unit / maxUnit) * 360;

  const hours = time.getHours() % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourRotation = calculateRotation(hours + minutes / 60, 12);
  const minuteRotation = calculateRotation(minutes + seconds / 60, 60);
  const secondRotation = calculateRotation(seconds, 60);

  return (
    <div className="relative h-64 w-64 bg-blue-900 rounded-full shadow-lg flex items-center justify-center">
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
  );
};

export default StylishAnalogClock;
