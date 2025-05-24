"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import ResponsiveIframe from "./ResponsiveIframe";
import AdPlaceholder from "./AdBlock";

const CountryInfo = ({ countryName }) => {
  const [countryInfo, setCountryInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountryInfo = async () => {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${encodeURIComponent(
            countryName
          )}?fullText=true`
        );
        setCountryInfo(response.data[0]);
        console.log(response.data[0]);
      } catch (error) {
        console.error("Error fetching country info:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountryInfo();
  }, [countryName]);

  if (loading) {
    return (
      <p className="text-center text-gray-500">
        Loading country information...
      </p>
    );
  }

  if (!countryInfo) {
    return (
      <p className="text-center text-red-600">
        No additional information found for "{countryName}".
      </p>
    );
  }

  return (
    <>
      <div className="mb-5 rounded-lg overflow-hidden border border-gray-200 my-5">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-3 text-lg font-semibold">
          Country Information
        </div>
        <div className="p-4">
          <div className="grid grid-cols-2 gap-y-4 gap-x-8 md:grid-cols-2 lg:grid-cols-2">
            <div className="flex flex-col">
              <span className="text-gray-700 font-bold">Region</span>
              <span className="text-gray-900">
                {countryInfo.region || "N/A"}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-700 font-bold">Subregion</span>
              <span className="text-gray-900">
                {countryInfo.subregion || "N/A"}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-700 font-bold">Population</span>
              <span className="text-gray-900">
                {countryInfo.population
                  ? countryInfo.population.toLocaleString()
                  : "N/A"}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-700 font-bold">Capital</span>
              <span className="text-gray-900">
                {countryInfo.capital ? countryInfo.capital.join(", ") : "N/A"}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-700 font-bold">Currency</span>
              <span className="text-gray-900">
                {Object.values(countryInfo.currencies || {})
                  .map((currency) => currency.name)
                  .join(", ") || "N/A"}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-700 font-bold">Languages</span>
              <span className="text-gray-900">
                {Object.values(countryInfo.languages || {}).join(", ") || "N/A"}
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-gray-700 font-bold">Country Frag</span>
              <span className="text-gray-900">
                <img
                  src={`${countryInfo.flags.png}`}
                  className="h-7 w-10 items-center"
                />
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-gray-700 font-bold">TIme Zone</span>
              <span className="text-gray-900">
                {Object.values(countryInfo.timezones[0] || {}) || "N/A"}
              </span>
            </div>
          </div>
        </div>
        {console.log(countryInfo.maps)}
      </div>
     </>
  );
};

export default CountryInfo;
