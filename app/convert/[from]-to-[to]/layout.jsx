import React from "react";
import { timeZoneData } from "@/helper/utility";

const layout = ({ children }) => {
  return (
    <div className="flex gap-1 md:gap-4 flex-col md:flex-row">
      <div className="w-full md:w-[20%] "></div>
      <div className="flex-1 ">{children}</div>
      <div className="w-full md:w-[20%]"></div>
    </div>
  );
};




 export async function generateStaticParams() {
  // Make sure timeZoneData is an ARRAY, not an object
  const abbreviations = timeZoneData.map(tz => tz.Abbreviation);

  const paths = [];
  abbreviations.forEach(from => {
    abbreviations.forEach(to => {
      if (from !== to) {
        paths.push({
          // The key must match the folder param name literally
          "from]-to-[to": `${from.toLowerCase()}-to-${to.toLowerCase()}`
        });
      }
    });
  });

  return paths; 
  // [
  //   { "from]-to-[to": "ist-to-cst" },
  //   { "from]-to-[to": "ist-to-pst" },
  //   ...
  // ]
}



export default layout;
