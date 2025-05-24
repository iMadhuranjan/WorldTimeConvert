import CountryTimeTables from "@/components/Country";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="text-2xl md:text-4xl mt-5 font-extrabold text-center text-amber-600">
        {" "}
        World Clock - All Country Time Directory{" "}
      </h1>

      <p className="text-[1rem] py-5 text-gray-600 text-center">
        Discover the current time across all countries in the world, grouped by
        continent. This comprehensive world clock directory provides real-time
        updates for every timezone, ensuring you stay informed no matter where
        you are. Perfect for travelers, businesses, and anyone needing accurate
        global time details.
      </p>

      <div className=" flex justify-center items-center">
        <div className="border w-[80%] border-black"></div>
      </div>
      <CountryTimeTables />
    </div>
  );
};

export default page;
