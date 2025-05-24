import Adsense6 from "@/Adsense/Adsense6";
import AdPlaceholder from "@/components/AdBlock";
import TimezoneFAQ from "@/components/TimeZone";
import TimeZoneTable from "@/components/TimeZoneTable";
import React from "react";

const page = () => {
  return (
    <div>
      <TimeZoneTable />
      <Adsense6 />
      <TimezoneFAQ />
      <Adsense6 />
    </div>
  );
};

export default page;

export const metadata = {
  title: "World Time Zone Table - WorldTimeConvert.Com",
};
