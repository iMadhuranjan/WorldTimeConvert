import AdSenseBanner from "@/components/SideBarAds";
import ResponsiveAd from "@/components/SideBarAds";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="flex gap-1 md:gap-4 flex-col md:flex-row">
      <div className="w-[20%] hidden lg:block sticky top-20 h-fit">
        <AdSenseBanner />
      </div>
      <div className="flex-1 ">{children}</div>
      <div className="w-[20%] hidden lg:block sticky top-20 h-fit">
        <AdSenseBanner />
      </div>
    </div>
  );
};

export default layout;

export const metadata = {
  title: "World Clock & Country Time Directory - WorldTimeConvert.Com",
  description:
    "Explore the World Clock and Time Directory to find accurate current times and timezones for all countries. Get updated local times instantly at WorldTimeConvert.",
};
