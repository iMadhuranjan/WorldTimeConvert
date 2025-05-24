"use client";

import React from "react";
import { useParams } from "next/navigation"; // Use for dynamic route parameters
import { timeZoneData } from "@/helper/utility"; // Adjust the path to your utility
import AnalogClock from "@/components/AnalogClock";
import AdPlaceholder from "@/components/AdBlock";
import AlreadyOpen from "@/components/AlreadyOpenFrom";
import Adsense2 from "@/Adsense/Adsense2";

const TimezonePage = () => {
  const params = useParams();
  const abbreviation = params?.timezone; // Get the `timezone` parameter from the URL

  // Find the timezone details from timeZoneData
  const timeZoneDetails = timeZoneData.find(
    (zone) => zone.Abbreviation.toLowerCase() === abbreviation?.toLowerCase()
  );

  if (!timeZoneDetails) {
    return (
      <div className="text-center py-8">
        <h1 className="text-2xl font-bold text-red-600">Invalid Timezone</h1>
        <p>Please check the URL or provide a valid timezone abbreviation.</p>
      </div>
    );
  }

  const { FullName, Region, Offset } = timeZoneDetails;

  return (
    <div className="container mx-auto px-2 py-5">
      <h1 className="text-3xl md:text-4xl  font-extrabold text-left mb-6">
        Live {timeZoneDetails["Full Name"]} ({abbreviation.toUpperCase()}) Time
      </h1>

      <Adsense2 />
      <AnalogClock
        timezone={Region}
        timezoneName={timeZoneDetails["Full Name"]}
        offset={Offset}
        abbreviation={abbreviation}
      />
      <Adsense2 />
      <AlreadyOpen from={abbreviation} />
    </div>
  );
};

export default TimezonePage;
