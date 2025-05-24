"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const TimezoneFAQ = () => {
  const [isOpen, setIsOpen] = useState(true); // State for accordion open/close

  return (
    <div className="my-6">
      {/* Accordion Header */}
      <div
        className="flex justify-between items-center text-black py-4 px-6 cursor-pointer rounded-t-lg shadow-all-sides"
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
        <div className="p-5 space-y-6">

          {/* Question 1 */}
          <div>
            <h3 className="text-2xl font-bold mb-3">
              What is a World Time Zone List?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              A <strong>World Time Zone List</strong> is a comprehensive guide
              that includes all the major time zones globally, along with their
              Coordinated Universal Time (UTC) offsets. It helps users quickly
              identify the local time in different regions.
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-3">
              <li>Example: EST (UTC-5), IST (UTC+5:30), and JST (UTC+9).</li>
              <li>
                This list is often accompanied by daylight saving adjustments
                for regions that observe it.
              </li>
            </ul>
          </div>

          {/* Question 2 */}
          <div>
            <h3 className="text-2xl font-bold mb-3">What is a World Clock Live?</h3>
            <p className="text-gray-700 leading-relaxed">
              A <strong>World Clock Live</strong> is a dynamic tool that shows the
              current time in multiple cities or countries worldwide. It is
              updated in real-time, making it easy to track global time zones.
            </p>
            <p className="text-gray-700">
              These tools are commonly used by businesses and travelers for
              scheduling meetings or planning trips across time zones.
            </p>
          </div>

          {/* Question 3 */}
          <div>
            <h3 className="text-2xl font-bold mb-3">What is a World Time Zone Map?</h3>
            <p className="text-gray-700 leading-relaxed">
              A <strong>World Time Zone Map</strong> visually represents the
              division of the Earth into different time zones. Each time zone is
              marked with its UTC offset and boundaries, helping users
              understand how time is distributed globally.
            </p>
            <p className="text-gray-700">
              These maps are particularly useful for educational purposes,
              scheduling, and understanding the impact of time zone differences.
            </p>
          </div>

          {/* Question 4 */}
          <div>
            <h3 className="text-2xl font-bold mb-3">How does a Time Zone Converter Work?</h3>
            <p className="text-gray-700 leading-relaxed">
              A <strong>Time Zone Converter</strong> allows users to convert a
              specific time in one region to another region’s local time. It
              accounts for UTC offsets and, in some cases, daylight saving
              changes.
            </p>
            <p className="text-gray-700">
              For example, if it’s 3:00 PM in New York (EST), the converter can
              show the equivalent time in Tokyo (JST), which would be 5:00 AM the
              next day.
            </p>
          </div>

          {/* Question 5 */}
          <div>
            <h3 className="text-2xl font-bold mb-3">What are World Time Zones in Order?</h3>
            <p className="text-gray-700 leading-relaxed">
              <strong>World Time Zones in Order</strong> refers to listing all
              global time zones sequentially based on their UTC offsets, from
              UTC-12:00 to UTC+14:00. This order helps users compare times
              across the globe.
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-3">
              <li>UTC-12:00: Baker Island, Howland Island</li>
              <li>UTC+0:00: London, Lisbon</li>
              <li>UTC+14:00: Line Islands</li>
            </ul>
          </div>

          {/* Question 6 */}
          <div>
            <h3 className="text-2xl font-bold mb-3">What is a World Time Converter?</h3>
            <p className="text-gray-700 leading-relaxed">
              A <strong>World Time Converter</strong> is an advanced tool that
              helps users determine the exact time difference between multiple
              locations worldwide. It simplifies scheduling across regions.
            </p>
            <p className="text-gray-700">
              For example, it can show that when it's 2:00 PM in Sydney, it’s 4:00 AM
              in London.
            </p>
          </div>

          {/* Question 7 */}
          <div>
            <h3 className="text-2xl font-bold mb-3">What is a Time Conversion Chart?</h3>
            <p className="text-gray-700 leading-relaxed">
              A <strong>Time Conversion Chart</strong> provides a visual
              reference for converting time between different regions. It is
              often formatted in tables, showing side-by-side comparisons of
              time in various cities.
            </p>
          </div>

          {/* Question 8 */}
          <div>
            <h3 className="text-2xl font-bold mb-3">What is World Time Buddy?</h3>
            <p className="text-gray-700 leading-relaxed">
              <strong>World Time Buddy</strong> is a popular tool designed for
              professionals and travelers to compare time zones, schedule
              meetings, and understand time differences in a user-friendly
              interface.
            </p>
            <p className="text-gray-700">
              It often includes features like drag-and-drop scheduling and
              dynamic updates for daylight saving changes.
            </p>
          </div>
          
        </div>
      </motion.div>
    </div>
  );
};

export default TimezoneFAQ;
