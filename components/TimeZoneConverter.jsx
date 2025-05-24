"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { timeZoneData } from "./../helper/utility";
import { DateTime } from "luxon";
import { Copy, RotateCw } from "lucide-react";

const DynamicTimeZoneConverter = ({ from, to }) => {
  const fromZone = timeZoneData.find(
    (zone) => zone.Abbreviation.toLowerCase() === from.toLowerCase()
  );
  const toZone = timeZoneData.find(
    (zone) => zone.Abbreviation.toLowerCase() === to.toLowerCase()
  );

  const [fromTime, setFromTime] = useState(
    DateTime.now().setZone(fromZone?.Region || "UTC")
  );
  const [toTime, setToTime] = useState(
    fromTime.setZone(toZone?.Region || "UTC")
  );

  const [copyStatus, setCopyStatus] = useState({
    from: "Copy to Clipboard",
    to: "Copy to Clipboard",
  });
  const [rotateState, setRotateState] = useState({ from: false, to: false });

  useEffect(() => {
    setToTime(fromTime.setZone(toZone?.Region || "UTC"));
  }, [fromTime, toZone]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFromTime(DateTime.now().setZone(fromZone?.Region || "UTC"));
    }, 60000);
    return () => clearInterval(interval);
  }, [fromZone]);

  const handleReset = (zoneKey) => {
    setRotateState((prev) => ({ ...prev, [zoneKey]: true }));

    if (zoneKey === "from") {
      const currentTime = DateTime.now().setZone(fromZone.Region);
      setFromTime(currentTime);
      setToTime(currentTime.setZone(toZone.Region));
    } else {
      const currentTime = DateTime.now().setZone(toZone.Region);
      setToTime(currentTime);
      setFromTime(currentTime.setZone(fromZone.Region));
    }

    setTimeout(
      () => setRotateState((prev) => ({ ...prev, [zoneKey]: false })),
      500
    );
  };

  const handleCopy = (zoneKey) => {
    const copiedText =
      zoneKey === "from"
        ? `Time: ${fromTime.toFormat("hh:mm a")}, Date: ${fromTime.toFormat(
            "MMM dd, yyyy"
          )}`
        : `Time: ${toTime.toFormat("hh:mm a")}, Date: ${toTime.toFormat(
            "MMM dd, yyyy"
          )}`;
    navigator.clipboard.writeText(copiedText);
    setCopyStatus((prev) => ({ ...prev, [zoneKey]: "Copied!" }));
    setTimeout(
      () =>
        setCopyStatus((prev) => ({ ...prev, [zoneKey]: "Copy to Clipboard" })),
      3000
    );
  };

  if (!fromZone || !toZone) {
    return (
      <div className="text-center py-6">
        <h6 className="text-red-600">
          Invalid time zones provided. Please check your inputs.
        </h6>
      </div>
    );
  }

  return (
    <div className="px-2 py-5 md:p-8 shadow-all-sides w-full mt-5">
      <div className="flex justify-center flex-col md:flex-row gap-5" >
        {/* From Time Zone */}
        <div className="text-center w-full md:w-1/2">
          <div className="relative">
            <h2 className="text-2xl pb-1 font-semibold bg-amber-600 py-2 text-white relative group">
              {fromZone.Abbreviation}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 bg-black text-white text-sm px-4 py-2 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {fromZone["Full Name"]}
              </div>
            </h2>
          </div>
          <input
            type="time"
            className="flex justify-center items-center text-center text-5xl md:text-6xl font-extrabold w-full py-5 px-4 cursor-pointer bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            value={fromTime.toFormat("HH:mm")}
            onChange={(e) => {
              const [hours, minutes] = e.target.value.split(":").map(Number);
              setFromTime(fromTime.set({ hour: hours, minute: minutes }));
            }}
          />
          <div className="bg-white">
            <input
              type="text"
              className="text-center text-xl font-extrabold border rounded-md w-full py-2 px-4 flex justify-center items-center bg-gray-200 cursor-pointer"
              value={fromTime.toFormat("MMM dd yyyy")}
              onFocus={(e) => {
                e.target.type = "date"; // Change to date picker on focus
                e.target.value = fromTime.toISODate(); // Set ISO date for picker
              }}
              onBlur={(e) => {
                e.target.type = "text"; // Change back to text after picking
                e.target.value = fromTime.toFormat("MMM dd yyyy"); // Format date
              }}
              onChange={(e) => {
                const newDate = DateTime.fromISO(e.target.value).setZone(
                  fromZone.Region
                );
                setFromTime(
                  fromTime.set({
                    year: newDate.year,
                    month: newDate.month,
                    day: newDate.day,
                  })
                );
              }}
            />
          </div>

          <div className="flex mt-4 gap-2 w-full border">
            <button
              className="flex gap-5 text-center items-center w-[90%] bg-amber-100 border border-amber-600 py-2 px-3 rounded font-bold hover:bg-amber-500 hover:text-white"
              onClick={() => handleCopy("from")}
            >
              <Copy /> <span className="text-center">{copyStatus.from}</span>
            </button>
            <div
              className="flex items-center flex-1 justify-center bg-amber-600 py-2 px-2 text-white rounded"
              onClick={() => handleReset("from")}
            >
              <motion.button
                animate={rotateState.from ? { rotate: 360 } : { rotate: 0 }}
                transition={{ duration: 0.5 }}
              >
                <RotateCw className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </div>
        {/* To Time Zone */}
        <div className="text-center w-full md:w-1/2">
          <div className="relative">
            <h2 className="text-2xl pb-1 font-semibold bg-amber-600 py-2 text-white relative group">
              {toZone.Abbreviation}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 bg-black text-white text-sm px-4 py-2 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {toZone["Full Name"]}
              </div>
            </h2>
          </div>
          <input
            type="time"
            className="flex justify-center items-center text-center text-5xl md:text-6xl font-extrabold w-full py-5 px-4 cursor-pointer bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            value={toTime.toFormat("HH:mm")}
            disabled
          />

          <input
            type="text"
            className="text-center text-xl centered-input font-extrabold border w-full py-2 px-4 bg-gray-200 cursor-pointer"
            value={toTime.toFormat("MMM dd, yyyy")}
            disabled
          />
          <div className="flex mt-4 gap-2 w-full border">
            <button
              className="flex gap-5 text-center items-center w-[90%] bg-amber-100 border border-amber-600 py-2 px-3 rounded font-bold hover:bg-amber-500 hover:text-white"
              onClick={() => handleCopy("to")}
            >
              <Copy /> <span className="text-center">{copyStatus.to}</span>
            </button>
            <div
              className="flex items-center flex-1 justify-center bg-amber-600 py-2 px-2 text-white rounded"
              onClick={() => handleReset("to")}
            >
              <motion.button
                animate={rotateState.to ? { rotate: 360 } : { rotate: 0 }}
                transition={{ duration: 0.5 }}
              >
                <RotateCw className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      <button
        className="mt-4 flex items-center justify-center gap-3 text-white text-center text-lg font-bold border w-full py-3 px-4 bg-red-500 cursor-pointer hover:bg-amber-600 rounded-md transition-all duration-300"
        onClick={() => {
          const buttonText = document.getElementById("copy-text");
          navigator.clipboard.writeText(window.location.href);
          buttonText.innerText = "Copied!";
          setTimeout(() => (buttonText.innerText = "Copy Link"), 2000); // Reset text after 2 seconds
        }}
        id="copy-button"
      >
        <Copy height={24} width={24} className="text-white" />
        <span id="copy-text">Copy Link</span>
      </button>
    </div>
  );
};

export default DynamicTimeZoneConverter;
