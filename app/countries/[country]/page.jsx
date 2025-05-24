"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Country from "@/helper/Country";
import CountryInfo from "@/components/CountryInfoTable";
import AdPlaceholder from "@/components/AdBlock";
import Adsense4 from "@/Adsense/Adsense4";

const AnalogClock = ({ timezone, timezoneName, country }) => {
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

  return (
    <div className="flex flex-col w-full md:flex-row gap-5 items-center p-5 shadow-md rounded-lg bg-white border">
      {/* Clock */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="relative w-64 h-64 bg-blue-900 rounded-full shadow-lg">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Clock Face */}
            <circle cx="50" cy="50" r="48" stroke="#1e3a8a" fill="#1e3a8a" />
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
      </div>

      {/* Timezone Details */}
      <div className="md:w-1/2 w-full justify-center items-center">
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-extrabold">{country}</h2>
          <h3 className="text-base">{timezoneName}</h3>

          <div className="flex items-center justify-center md:justify-normal md:items-start mb-5">
            <div className="border border-black w-[80%]"></div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900">
            {localTime.toDateString()}
          </h2>
          <p className="text-xl font-semibold text-gray-700 mt-2">
            {localTime.toLocaleTimeString()}
          </p>
        </div>
      </div>
    </div>
  );
};

const CountryPage = () => {
  const { country } = useParams();

  function formattedCountry(country) {
    const newCountry = country.replace("-", " ");
    return newCountry;
  }

  // Decode the country name from the URL
  const decodedCountry = decodeURIComponent(formattedCountry(country));

  // Filter all timezones for the given country
  const countryTimezones = Country.filter(
    (item) => item.country.toLowerCase() === decodedCountry.toLowerCase()
  );

  if (countryTimezones.length === 0) {
    return (
      <div className="text-center py-10">
        <h1 className="text-2xl font-bold text-red-600">
          No timezones found for "{decodedCountry}"
        </h1>
      </div>
    );
  }

  return (
    <div className="my-6 px-4">
      <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-3 md:mb-8 text-amber-700">
        Timezones in {decodedCountry}
      </h1>
      <p className="text-lg text-gray-700 text-center mb-6">
        <strong>{decodedCountry} Time Right Now!</strong> Find{" "}
        <strong>the Current time in {decodedCountry}</strong> from anywhere in
        the world. Find <strong>{decodedCountry} Clock Time Now</strong> with
        the help of our{" "}
        <a href="https://worldtimeconvert.com/" target="_blank">
          WorldTimeConvert
        </a>{" "}
        Tool Online.
      </p>

      <Adsense4 />
      <div className="flex gap-3 flex-col">
        {countryTimezones.map((item, index) => (
          <AnalogClock
            key={index}
            timezone={item.timezone}
            timezoneName={item.timezone}
            country={decodedCountry}
          />
        ))}
      </div>

      <Adsense4 />

      {/* <CountryInfo countryName={decodedCountry} /> */}
    </div>
  );
};

export default CountryPage;
