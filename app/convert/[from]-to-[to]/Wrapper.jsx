"use client";
import { useEffect, useState } from "react";
import { timeZoneData } from "./../../../helper/utility"; // Adjust the path as needed
import DynamicTimeZoneConverter from "@/components/TimeZoneConverter";
import AdBlock from "@/components/AdBlock";
import TimezoneAccordion from "@/components/Accordation";
import TimezoneLinks from "@/components/FromList";
import TimezoneTable from "@/components/TimeZoneData";
import Link from "next/link";
import AdPlaceholder from "@/components/AdBlock";
import Adsense1 from "@/Adsense/Adsense1";
import Adsense2 from "@/Adsense/Adsense2";

export default function ClientConverter({ from, to }) {
  const [isValid, setIsValid] = useState(true);
  const [fromZone, setFromZone] = useState("");
  const [toZone, setToZone] = useState("");

  useEffect(() => {
    const fromZoneData = timeZoneData.find(
      (zone) => zone.Abbreviation.toLowerCase() === from.toLowerCase()
    );
    const toZoneData = timeZoneData.find(
      (zone) => zone.Abbreviation.toLowerCase() === to.toLowerCase()
    );

    // Check if both time zones are valid
    if (!fromZoneData || !toZoneData) {
      setIsValid(false);
    } else {
      setFromZone(fromZoneData["Full Name"]);
      setToZone(toZoneData["Full Name"]);
    }
  }, [from, to]);

  // If invalid time zones are provided, return an error message
  if (!isValid) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <div className="p-5 bg-red-100 text-red-600 rounded-lg max-w-lg">
          <h1 className="text-3xl font-bold mb-3">Invalid Timezone Selected</h1>
          <p className="text-lg">
            The time zones <strong>{from.toUpperCase()}</strong> or{" "}
            <strong>{to.toUpperCase()}</strong> are not recognized. Please check
            your selection and try again.
          </p>
          <Link href={"/"}> Go to HomePage</Link>
        </div>
      </div>
    );
  }

  // Render the main component if time zones are valid
  return (
    <>
      <div className="flex flex-col gap-5 items-center">
        <h1 className="text-3xl md:text-[3rem] font-extrabold mt-2 md:mt-14">
          {from.toUpperCase()} to {to.toUpperCase()} Converter
        </h1>
        <p className="text-center text-base md:text-lg">
          Seamlessly convert{" "}
          <strong className="text-red-600">
            {fromZone} ({from.toUpperCase()}) to {toZone} ({to.toUpperCase()})
          </strong>{" "}
          in just a few clicks. Adjust the time to explore how it translates
          from
          <strong className="text-amber-600">
            {" "}
            {from.toUpperCase()} to {to.toUpperCase()}
          </strong>{" "}
          instantly. Perfect for scheduling across time zones or staying
          connected globally!
        </p>
      </div>
      <Adsense1 />
      <DynamicTimeZoneConverter from={from} to={to} />
      <Adsense1 />
      <TimezoneAccordion from={from} to={to} />
      <Adsense2 />
      <TimezoneLinks from={from} />
      <Adsense2 />
      <TimezoneTable from={from} to={to} />
      <Adsense2 />
      <TimezoneLinks from={to} />
    </>
  );
}
