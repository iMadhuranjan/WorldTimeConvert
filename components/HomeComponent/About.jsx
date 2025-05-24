import { Braces, Earth, ShieldCheck, WholeWord } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <div className=" py-5 px-3">
      <h3 className="text-3xl  font-semibold pb-4">
        {" "}
        About our World Time Converter
      </h3>
      <p>
        Navigating time zones can be challenging, especially when scheduling
        meetings, planning trips, or coordinating with loved ones around the
        globe. Our World Time Converter is your one-stop solution for accurate
        and instant time zone conversions. Whether you're a business
        professional coordinating international meetings or a traveler planning
        your next destination, we've got you covered. With real-time accuracy
        and user-friendly design, converting time zones has never been easier!"
      </p>

      <div className="flex gap-3 flex-col md:flex-row w-full my-5">
        <div className="w-full md:w-1/2 flex flex-col gap-3 text-center justify-center  items-center shadow-all-sides p-5">
          <Earth className="w-16 h-16 text-green-500" />
          <h4 className="text-[1.3rem] font-bold">
            {" "}
            Accurate Timezone Conversions
          </h4>
          <p>
            We use the globally trusted{" "}
            <a href="https://www.iana.org/" target="_blank">
              IANA
            </a>{" "}
            Time Zone Database and advanced technologies like the Luxon library
            and Intl API to ensure precise, real-time timezone calculations,
            reflecting the latest daylight saving and geopolitical changes.
          </p>
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-3 text-center justify-center items-center shadow-all-sides p-5">
          <Braces className="w-16 h-16 text-red-500" />
          <h4 className="text-[1.3rem] font-bold">
            Fast and Seamless with React
          </h4>
          <p>
            Our website is built with{" "}
            <a href="https://react.dev/" target="_blank">
              React
            </a>{" "}
            , a powerful and efficient front-end library. our website delivers
            lightning-fast performance and a smooth, no-refresh experience.
            Enjoy seamless navigation and modern speed with every visit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
