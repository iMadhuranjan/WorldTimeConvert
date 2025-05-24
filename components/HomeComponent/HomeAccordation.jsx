"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const TimezoneConverter = () => {
  const [isOpen, setIsOpen] = useState(true); // State for accordion open/close

  return (
    <div className="my-6">
      {/* Accordion Header */}
      <div
        className="flex justify-between items-center bg-gradient-to-r text-black py-4 px-6 cursor-pointer rounded-t-lg shadow-md"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <h2 className="text-xl font-bold">Frequently Asked Questions</h2>
        <span className="text-lg">{isOpen ? "▲" : "▼"}</span>
      </div>

      {/* Accordion Content */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="overflow-hidden bg-white rounded-b-lg shadow-md"
      >
        <div className="w-full mx-auto my-2 px-5">
          <div className="mb-5">
            <h3 className="text-2xl font-bold mb-2">
              Why do we have different times in different countries?
            </h3>
            <p className="text-gray-700 mb-4">
              Different countries have different times because the Earth is
              divided into
              <strong> 24 time zones</strong>, each roughly corresponding to 15
              degrees of longitude. As the Earth rotates, different parts face
              the Sun at different times, creating variations in local time.
            </p>
            <p className="text-gray-700 mb-4">
              The Earth rotates on its axis, completing one full spin every 24
              hours. To standardize time globally, the world is divided into
              time zones, ensuring local time matches the position of the Sun in
              the sky.
            </p>
            <p className="text-gray-700 mb-4">
              For example, when it’s
              <strong> morning in Tokyo</strong>, it’s still{" "}
              <strong>night in New York</strong> because they are in entirely
              different time zones. Some countries also adjust their clocks
              seasonally for <strong>Daylight Saving Time</strong> to make
              better use of daylight.
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 pl-2">
              <li>Time zones help maintain order and organization globally.</li>
              <li>
                It ensures that activities like work and leisure align with
                natural daylight hours.
              </li>
            </ul>
          </div>
        </div>

        <div className="flex w-full mx-auto my-1 px-5 mb-6">
          <div className="border border-black w-[90%]"></div>
        </div>

        <div className="w-full mx-auto my-5 p-5">
          <div className="mb-5">
            <h3 className="text-2xl font-bold mb-1">
              What is a World Time Zone?
            </h3>
            <p className="text-gray-700 mb-4">
              A <strong>world time zone</strong> is a region of the Earth that
              observes a uniform standard time for legal, commercial, and social
              purposes. The concept of time zones divides the world into{" "}
              <strong>24 regions</strong>, each corresponding to one hour of the
              day, based on the Earth's rotation.
            </p>
            <p className="text-gray-700 mb-4">
              The starting point for all time zones is the{" "}
              <strong>Prime Meridian</strong> (0° longitude), which runs through
              Greenwich, England. Time zones are measured as an offset from{" "}
              <strong>Coordinated Universal Time (UTC)</strong>, with some being
              ahead of or behind UTC.
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 pl-2">
              <li>
                For example, New York (EST) is UTC-5, while Tokyo (JST) is
                UTC+9.
              </li>
              <li>
                Some countries adjust their time during the year for
                <strong> Daylight Saving Time</strong>, further impacting world
                time zones.
              </li>
            </ul>
          </div>
        </div>

        <div className="flex w-full mx-auto my-1 px-5 mb-6">
          <div className="border border-black w-[90%]"></div>
        </div>

        <div className="w-full mx-auto my-5 p-5">
          <div className="mb-5">
            <h3 className="text-2xl font-bold mb-1">What is GMT and UTC?</h3>
            <p className="text-gray-700 mb-4">
              <strong>GMT (Greenwich Mean Time)</strong> and{" "}
              <strong>UTC (Coordinated Universal Time)</strong> are both time
              standards used worldwide, but they have subtle differences:
            </p>
            <div className="bg-gray-100 p-4 rounded-md shadow-sm">
              <p className="text-gray-700">
                <strong>GMT</strong> is a time zone that originated in
                Greenwich, England. It is based on the position of the Sun and
                is mainly used as the time standard for some regions, especially
                in the UK and Africa.
              </p>
              <p className="text-gray-700 mt-2">
                <strong>UTC</strong>, on the other hand, is the modern global
                time standard. It is not a time zone but a time standard that
                relies on precise atomic clocks to measure time. UTC is used
                worldwide for coordinating clocks, calendars, and systems.
              </p>
            </div>
            <p className="text-gray-700 mt-4">
              While both GMT and UTC share the same current time, UTC is more
              accurate as it incorporates leap seconds to account for Earth's
              irregular rotation. GMT does not include leap seconds.
            </p>
            <div className="mt-4">
              <h4 className="text-lg font-semibold mb-2">Key Differences:</h4>
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr>
                    <th className="border border-gray-300 p-2 bg-gray-200">
                      Feature
                    </th>
                    <th className="border border-gray-300 p-2 bg-gray-200">
                      GMT
                    </th>
                    <th className="border border-gray-300 p-2 bg-gray-200">
                      UTC
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2">Definition</td>
                    <td className="border border-gray-300 p-2">Time zone</td>
                    <td className="border border-gray-300 p-2">
                      Time standard
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">Based On</td>
                    <td className="border border-gray-300 p-2">Solar time</td>
                    <td className="border border-gray-300 p-2">
                      Atomic clocks
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">Accuracy</td>
                    <td className="border border-gray-300 p-2">
                      Less accurate
                    </td>
                    <td className="border border-gray-300 p-2">
                      Highly precise
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">Leap Seconds</td>
                    <td className="border border-gray-300 p-2">
                      Not accounted for
                    </td>
                    <td className="border border-gray-300 p-2">
                      Includes leap seconds
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 mt-4">
              In summary, GMT is a time zone linked to the Prime Meridian, while
              UTC is the global time standard used for synchronization across
              the world.
            </p>
          </div>
        </div>

        <div className="flex w-full mx-auto my-1 px-5 mb-6">
          <div className="border border-black w-[90%]"></div>
        </div>

        <div className="w-full mx-auto my-5 p-5">
          <div className="mb-5">
            <h3 className="text-2xl font-bold mb-1">What do AM and PM mean?</h3>
            <p className="text-gray-700 mb-4">
              <strong>AM</strong> stands for <em>Ante Meridiem</em>, meaning
              "before midday" in Latin, and <strong>PM</strong> stands for{" "}
              <em>Post Meridiem</em>, meaning "after midday." These terms are
              used in the <strong>12-hour clock system</strong> to distinguish
              time before and after noon:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 pl-4">
              <li>
                <strong>AM (00:00 to 11:59):</strong> Refers to the time from
                midnight to just before noon.
              </li>
              <li>
                <strong>PM (12:00 to 23:59):</strong> Refers to the time from
                noon to just before midnight.
              </li>
            </ul>
          </div>

          <div className="mb-5">
            <h3 className="text-2xl font-bold mb-1">
              What is the difference between 12-hour and 24-hour clock systems?
            </h3>
            <p className="text-gray-700 mb-4">
              The <strong>12-hour clock system</strong> divides the day into two
              periods of 12 hours each, using AM and PM to indicate morning and
              evening times. In contrast, the{" "}
              <strong>24-hour clock system</strong> runs continuously from 00:00
              (midnight) to 23:59, eliminating the need for AM and PM.
            </p>
            <div className="rounded-md shadow-sm">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr>
                    <th className="border border-gray-300 p-2 bg-gray-200">
                      Feature
                    </th>
                    <th className="border border-gray-300 p-2 bg-gray-200">
                      12-Hour Clock
                    </th>
                    <th className="border border-gray-300 p-2 bg-gray-200">
                      24-Hour Clock
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2">Time Format</td>
                    <td className="border border-gray-300 p-2">HH:MM AM/PM</td>
                    <td className="border border-gray-300 p-2">HH:MM</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">
                      Example Morning Time
                    </td>
                    <td className="border border-gray-300 p-2">8:00 AM</td>
                    <td className="border border-gray-300 p-2">08:00</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">
                      Example Evening Time
                    </td>
                    <td className="border border-gray-300 p-2">8:00 PM</td>
                    <td className="border border-gray-300 p-2">20:00</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">Common Use</td>
                    <td className="border border-gray-300 p-2">
                      Everyday use in the US and other countries
                    </td>
                    <td className="border border-gray-300 p-2">
                      Standard in military, aviation, and global timekeeping
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-5">
            <p className="text-gray-700">
              While the <strong>12-hour clock</strong> is more common in
              everyday life, the
              <strong> 24-hour clock</strong> is widely used in fields where
              clarity and precision are essential, such as{" "}
              <strong>transportation</strong>,{" "}
              <strong>military operations</strong>, and{" "}
              <strong>international communication</strong>. It avoids ambiguity
              and confusion, especially in written schedules.
            </p>
          </div>
        </div>
        
        <div className="flex w-full mx-auto my-1 px-5 mb-6">
          <div className="border border-black w-[90%]"></div>
        </div>

        <div className="w-full mx-auto my-5 p-5">
          <div className="mb-5">
            <h3 className="text-2xl font-bold mb-1">
              What are IST, EST, and other time zones, and why are they
              important?
            </h3>
            <p className="text-gray-700 mb-4">
              <strong>IST (Indian Standard Time)</strong>,{" "}
              <strong>EST (Eastern Standard Time)</strong>, and other
              abbreviations represent different time zones around the world.
              Time zones are regions that share the same standard time for
              legal, commercial, and social purposes. They are based on the
              Earth's division into <strong>24 longitudinal sections</strong>,
              each corresponding to one hour of the day.
            </p>
            <p className="text-gray-700 mb-4">
              These time zones are standardized by referencing the{" "}
              <strong>Prime Meridian (0° longitude)</strong> and are measured as
              offsets from <strong>Coordinated Universal Time (UTC)</strong>.
              For example:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 pl-4">
              <li>
                <strong>IST (Indian Standard Time):</strong> UTC+5:30, meaning
                it is 5 hours and 30 minutes ahead of UTC.
              </li>
              <li>
                <strong>EST (Eastern Standard Time):</strong> UTC-5, meaning it
                is 5 hours behind UTC.
              </li>
              <li>
                <strong>GMT (Greenwich Mean Time):</strong> UTC+0, the baseline
                for measuring time globally.
              </li>
            </ul>
          </div>

          <div className="mb-5">
            <h3 className="text-xl font-bold mb-2">
              Why were time zones created?
            </h3>
            <p className="text-gray-700 mb-4">
              Time zones were created to account for the Earth’s rotation, which
              causes different parts of the world to experience daylight and
              darkness at different times. Before standardized time zones, each
              city set its own local time based on the Sun’s position, which
              caused confusion, especially with the advent of railways and
              global communication.
            </p>
            <p className="text-gray-700">
              In 1884, the <strong>International Meridian Conference</strong>{" "}
              established a standardized system of global time zones with
              Greenwich, England, as the reference point (GMT).
            </p>
          </div>

          <div className="mb-5">
            <h3 className="text-xl font-bold mb-2">
              What is the importance of time zones?
            </h3>
            <p className="text-gray-700 mb-4">
              Time zones are crucial for coordinating activities and
              communication across the globe. They ensure that:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 pl-4">
              <li>
                Businesses and governments can schedule meetings and operations
                efficiently across different regions.
              </li>
              <li>
                Transportation systems, such as airlines and railways, can
                maintain precise schedules.
              </li>
              <li>
                International trade and financial markets operate seamlessly
                despite geographical distances.
              </li>
            </ul>
            <p className="text-gray-700">
              Without time zones, global coordination would be chaotic, as
              people in different parts of the world would follow local times
              that vary widely.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TimezoneConverter;
