"use client";
import { DateTime } from "luxon";
import { useState, useEffect } from "react";
import HomeClockComponent from "./HomeClockComponent";
import AdPlaceholder from "./AdBlock";
import About from "./HomeComponent/About";
import PopularTimes from "./HomeComponent/WorldClock";
import FAQAccordion from "./HomeComponent/HomeAccordation";
import ExploreTools from "./HomeComponent/ExploreTools";
import FinalWords from "./HomeComponent/FinalWords";
import Adsense1 from "@/Adsense/Adsense1";

export default function HeroHome() {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    // Get the user's local timezone
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Fetch and format the current time using Luxon
    const time = DateTime.now()
      .setZone(timezone)
      .toLocaleString(DateTime.DATETIME_MED);
    setLocalTime(time);

    // Optional: Update the time every second (live clock)
    const interval = setInterval(() => {
      const updatedTime = DateTime.now()
        .setZone(timezone)
        .toLocaleString(DateTime.DATETIME_MED);
      setLocalTime(updatedTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="my-5 md:my-10 flex flex-col flex-1 items-center gap-5 w-full">
        <h1 className="text-center text-amber-600 font-extrabold text-4xl md:text-4xl lg:text-5xl">
          {" "}
          Welcome to World Time Convert
        </h1>
        <p className="text-center">
          <strong>
            <a href="https://WorldTimeConvert.Com">WorldTimeConvert.Com</a>
          </strong>
          , your trusted <strong>timezone converter</strong> for accurate and
          real-time <strong>world clock</strong> services. Easily{" "}
          <strong>convert time differences</strong>,{" "}
          <strong>compare time zones</strong>, and explore{" "}
          <strong>time zone times</strong> from any region, including{" "}
          <strong>Japanese time</strong>, <strong>Korean timing</strong>, {" "}
          <strong>Euro time</strong> and More.{" "}
        </p>
        <p className="text-center">
          With our advanced <strong>time zone calculator</strong>, you can
          effortlessly <strong>convert time with timezone</strong> or use our{" "}
          <strong>time difference calculator</strong> for precise results.
          Whether you need to check the <strong>global time</strong>,{" "}
          <strong>ist to est converter</strong>, or calculate{" "}
          <strong>time zone differences</strong>, we’ve got you covered. Start
          using the best <strong>world time zones</strong> and{" "}
          <strong>universal time converter</strong> now!
        </p>
      </div>
      <Adsense1 />

      <HomeClockComponent />
      <Adsense1 />
      <About />
      <img
        src={"/WorldTimeConvert.png"}
        className="w-full mb-5 px-2 md:px-10"
      />
      <Adsense1 />
      <PopularTimes />
      <Adsense1 />
      <FAQAccordion />
      <ExploreTools />
      <Adsense1 />
      <FinalWords />
    </>
  );
}
