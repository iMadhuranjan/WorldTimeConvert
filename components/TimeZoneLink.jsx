import React, { useState } from "react";
import { motion } from "framer-motion";
import { timeZoneData } from "./../helper/utility"; // Adjust the path as needed
import Link from "next/link";

const TimeZoneAllLinks = () => {
  const [activeZone, setActiveZone] = useState(null); // Track the currently active dropdown
  const [searchQuery, setSearchQuery] = useState(""); // Track the search input

  // Remove duplicates from timeZoneData based on Abbreviation
  const uniqueTimeZoneData = timeZoneData.filter(
    (zone, index, self) =>
      index === self.findIndex((z) => z.Abbreviation === zone.Abbreviation)
  );

  const handleToggle = (zone) => {
    setActiveZone(activeZone === zone ? null : zone); // Toggle the dropdown
  };

  // Filter timezones based on the search query
  const filteredTimeZoneData = uniqueTimeZoneData.filter(
    (zone) =>
      zone.Abbreviation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      zone["Full Name"].toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8 shadow-all-sides my-5">
      <h2 className="text-4xl font-extrabold mb-6 text-center text-amber-600">
        Timezone Conversion Links
      </h2>

      <p className="text-center pb-4 p-2 md:px-5">
        Explore popular time zones like IST, EST, PST, GMT, and many more and convert
        between them with ease. Simplify your time management and stay connected
        across the globe!
      </p>

      {/* Search Bar */}
      <div className="flex justify-center items-center mb-6">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by abbreviation or full name..."
          className="p-3 border rounded-l-lg focus:ring-2 focus:ring-amber-500 w-3/4 md:w-1/2"
        />
        <button
          onClick={() => setSearchQuery(searchQuery.trim())} // Trigger search on button click
          className="bg-amber-600 text-white px-4 py-3 rounded-r-lg hover:bg-amber-700 transition"
        >
          Search
        </button>
      </div>

      {/* Timezone Conversion Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredTimeZoneData.map((fromZone) => (
          <div
            key={fromZone.Abbreviation}
            className="bg-white shadow-md rounded-lg p-4"
          >
            {/* Header */}
            <div
              onClick={() => handleToggle(fromZone.Abbreviation)}
              className="cursor-pointer flex justify-between items-center"
            >
              <h2 className="text-lg font-bold text-black">
                {fromZone["Abbreviation"]} Converter
              </h2>

              <span className="text-gray-500 text-lg">
                {activeZone === fromZone.Abbreviation ? "-" : "+"}
              </span>
            </div>

            {/* Smooth Animation with Framer Motion */}
            {activeZone === fromZone.Abbreviation && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden mt-4"
              >
                <div className="flex flex-col space-y-2">
                  {uniqueTimeZoneData
                    .filter(
                      (toZone) => toZone.Abbreviation !== fromZone.Abbreviation
                    )
                    .map((toZone) => (
                      <li key={toZone.Abbreviation} className="list-disc">
                        <Link
                          href={`/convert/${fromZone.Abbreviation.toLowerCase()}-to-${toZone.Abbreviation.toLowerCase()}`}
                          className="text-blue-600 hover:text-amber-600"
                        >
                          {fromZone["Full Name"]} ({fromZone["Abbreviation"]})
                          to {toZone["Full Name"]} ({toZone["Abbreviation"]})
                        </Link>
                      </li>
                    ))}
                </div>
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* No Results Found */}
      {filteredTimeZoneData.length === 0 && (
        <p className="text-center text-gray-600 mt-4">
          No results found for "{searchQuery}". Try searching for another
          timezone.
        </p>
      )}
    </div>
  );
};

export default TimeZoneAllLinks;
