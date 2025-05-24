import AdSenseBanner from "@/components/SideBarAds";
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
  title: "World Time Converter - Accurate and Real-Time Timezone Converter",
  description: `
    Discover the ultimate World Time Converter tool designed to help you seamlessly convert timezones 
    across various countries in real-time. Whether you're planning international meetings, managing 
    cross-border schedules, or simply curious about the current time in another region, our World 
    Time Converter ensures accuracy and simplicity.
  `,
};
