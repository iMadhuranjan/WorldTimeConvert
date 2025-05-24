"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { timeZoneData } from "./../helper/utility"; // Adjust the path as needed
import Link from "next/link";

const TimezoneLinks = ({ from }) => {
  // Filter out duplicates by abbreviation
  const uniqueTimeZoneData = timeZoneData.filter(
    (zone, index, self) =>
      index === self.findIndex((z) => z.Abbreviation === zone.Abbreviation)
  );

  const [isOpen, setIsOpen] = useState(true);

  // Filter and map the time zones excluding the "from" abbreviation
  const links = uniqueTimeZoneData
    .filter((zone) => zone.Abbreviation.toLowerCase() !== from.toLowerCase())
    .map((zone) => ({
      to: zone.Abbreviation,
      fullName: zone["Full Name"],
      link: `/convert/${from.toLowerCase()}-to-${zone.Abbreviation.toLowerCase()}`,
    }));

  return (
    <div className="w-full mx-auto my-5 border shadow-all-sides bg-white rounded-lg">
      {/* Header Section */}
      <div
        className="flex justify-between items-center cursor-pointer p-5 rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg text-center md:text-2xl font-bold">
          Convert {from.toUpperCase()} to other time zones
        </h3>
        <button className="text-xl text-gray-600">{isOpen ? "▲" : "▼"}</button>
      </div>

      {/* Smooth Collapsible Section */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden px-4 md:px-10"
          >
            <p className="text-lg text-gray-700 mt-5 mb-5">
              <a
                href="http://worldtimeconvert.com/"
                className="text-blue-600 font-bold"
                target="_blank"
                rel="noopener noreferrer"
              >
                WorldTimeConvert.com
              </a>{" "}
              allows you to convert {from.toUpperCase()} to a variety of other
              time zones. We will Add more TimeZone in Future :)
            </p>
            {/* Table Layout */}
            <div className="grid grid-cols-2 md:grid-cols-3 mb-5 gap-4 text-amber-600">
              {links.map((link) => (
                <div
                  key={link.to}
                  className="border-b border-gray-200 py-2 px-3 transition-all text-lg"
                >
                  <Link
                    href={link.link}
                    className="text-amber-600  hover:text-amber-900 font-semibold"
                  >
                    {from.toUpperCase()} to {link.to}
                  </Link>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TimezoneLinks;
