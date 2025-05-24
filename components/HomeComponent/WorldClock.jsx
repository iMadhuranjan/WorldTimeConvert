import Link from "next/link";
import React, { useEffect, useState } from "react";

const locations = [
  { name: "India", timezone: "Asia/Kolkata", country: "India" },
  {
    name: "California",
    timezone: "America/Los_Angeles",
    country: "United States",
  },
  { name: "New York", timezone: "America/New_York", country: "United States" },
  { name: "London", timezone: "Europe/London", country: "Britain (UK)" },
  { name: "Sydney", timezone: "Australia/Sydney", country: "Australia" },
  { name: "China", timezone: "Asia/Shanghai", country: "China" },
  { name: "Tokyo", timezone: "Asia/Tokyo", country: "Japan" },
  { name: "Berlin", timezone: "Europe/Berlin", country: "Germany" },
  { name: "Dubai", timezone: "Asia/Dubai", country: "United Arab Emirates" },
  { name: "Moscow", timezone: "Europe/Moscow", country: "Russia" },
  { name: "Singapore", timezone: "Asia/Singapore", country: "Singapore" },
  { name: "Paris", timezone: "Europe/Paris", country: "France" },
  {
    name: "Johannesburg",
    timezone: "Africa/Johannesburg",
    country: "South Africa",
  },
  { name: "Mexico City", timezone: "America/Mexico_City", country: "Mexico" },
  {
    name: "Buenos Aires",
    timezone: "America/Argentina/Buenos_Aires",
    country: "Argentina",
  },
  { name: "Bangkok", timezone: "Asia/Bangkok", country: "Thailand" },
];

const PopularTimes = () => {
  const [times, setTimes] = useState([]);

  useEffect(() => {
    const updateTimes = () => {
      const updatedTimes = locations.map((location) => {
        const now = new Date().toLocaleString("en-US", {
          timeZone: location.timezone,
        });
        const date = new Date(now);
        return {
          ...location,
          time: date.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          }),
          date: date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          }),
        };
      });
      setTimes(updatedTimes);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  const formatToURL = (name) => name;

  function formattedCountry(country) {
    const newCountry = country.replace(" ", "-");
    return newCountry;
  }
  return (
    <>
      <h3 className="p-3 text-xl md:text-2xl font-semibold">
        Our users frequently convert time from the following locations
      </h3>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-3">
        {times.map((location, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 items-center justify-center bg-white shadow-md p-4 rounded-lg border border-gray-200"
          >
            <h3 className="text-lg font-bold text-blue-600">
              <Link
                href={`/countries/${formatToURL(
                  formattedCountry(location.country)
                )}`}
              >
                {location.name}
              </Link>
            </h3>
            <p className="text-2xl font-semibold text-gray-900">
              {location.time}
            </p>
            <p className="text-sm text-gray-500">{location.date}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default PopularTimes;
