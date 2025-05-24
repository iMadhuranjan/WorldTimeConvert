"use client";

import React, { useEffect, useState } from "react";
import { DateTime } from "luxon";
import Country from "@/helper/Country"; // Assuming your country data is here.
import { Globe2Icon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { motion } from "framer-motion";
import AdPlaceholder from "./AdBlock";
import Link from "next/link";
import Adsense2 from "@/Adsense/Adsense2";

const countries = Country;

const ContinentTimeTable = () => {
  const [currentTime, setCurrentTime] = useState(DateTime.local());
  const [openContinent, setOpenContinent] = useState({});

  // Initialize dropdowns to be open by default
  useEffect(() => {
    const initialState = {};
    const continents = [...new Set(countries.map((item) => item.continent))];
    continents.forEach((continent) => {
      initialState[continent] = true;
    });
    setOpenContinent(initialState);
  }, []);

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(DateTime.local());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  // Get time and date for a given timezone
  const getTimeForTimezone = (timezone) => {
    const time = DateTime.now().setZone(timezone);
    return {
      time: time.toFormat("hh:mm a"), // Time in 12-hour format
      date: time.toFormat("MMM dd yyyy"), // Date in "Jan 12 2025" format
    };
  };

  // Group countries by continent
  const continents = [...new Set(countries.map((item) => item.continent))];
  const groupedData = continents.map((continent) => ({
    continent,
    countries: countries.filter((item) => item.continent === continent),
  }));

  // Toggle dropdown for a continent
  const toggleDropdown = (continent) => {
    setOpenContinent((prevState) => ({
      ...prevState,
      [continent]: !prevState[continent],
    }));
  };

  function formattedCountry(country) {
    const newCountry = country.replace(" ", "-");
    return newCountry;
  }
  return (
    <div className="my-6 px-4 ">
      {groupedData.map((group, index) => (
        <>
          <div key={index} className="mb-10 shadow-all-sides">
            {/* Continent Name with Dropdown */}
            <div className="flex flex-col items-start py-3">
              <div
                className="flex gap-1 px-5 justify-between items-center w-full cursor-pointer"
                onClick={() => toggleDropdown(group.continent)}
              >
                <div className="flex gap-2 items-center mb-1">
                  <Globe2Icon className="h-8 w-8 mb-1 text-green-600" />
                  <h2 className="text-2xl md:text-3xl font-bold text-amber-700 px-1 my-1">
                    {group.continent}
                  </h2>
                </div>

                {openContinent[group.continent] ? (
                  <ChevronUpIcon className="h-6 w-6 text-gray-600" />
                ) : (
                  <ChevronDownIcon className="h-6 w-6 text-gray-600" />
                )}
              </div>
              <div className="border w-[50%] border-red-700 ml-3"></div>
            </div>

            {/* Responsive Grid for Cards with Framer Motion */}
            <motion.div
              initial={{ height: "auto", opacity: 1 }}
              animate={{
                height: openContinent[group.continent] ? "auto" : 0,
                opacity: openContinent[group.continent] ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden mb-5"
            >
              <div
                className="grid gap-6"
                style={{
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                }}
              >
                {group.countries.map((country, i) => {
                  const { time, date } = getTimeForTimezone(country.timezone);
                  return (
                    <div
                      key={i}
                      className="p-4 rounded-lg shadow-sm bg-white flex justify-between items-center"
                    >
                      {/* Country and Timezone */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">
                          <Link
                            href={`/countries/${formattedCountry(
                              country.country
                            )}`}
                            className="text-blue-700 hover:text-amber-600"
                          >
                            {country.country}{" "}
                          </Link>
                        </h3>
                        <p className="text-sm text-gray-500">
                          {country.timezone}
                        </p>
                      </div>
                      {/* Time and Date */}
                      <div className="text-right">
                        <p className="text-lg font-bold text-gray-900">
                          {time}
                        </p>
                        <p className="text-sm text-gray-600">{date}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Ad Placeholder with Margin Top */}
          </div>

          <div className="mt-4 bg-white">
            {/* Replace with actual AdPlaceholder */}
            <Adsense2 />
          </div>
        </>
      ))}
    </div>
  );
};

export default ContinentTimeTable;
