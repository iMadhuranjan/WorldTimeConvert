import { Globe, Clock, Map } from "lucide-react";
import React from "react";

const ExploreTools = () => {
  return (
    <div className="px-3">
      <h3 className="font-extrabold text-2xl py-3 text-gray-900">
        Explore Our Tools
      </h3>

      <div className="w-full my-3">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Countries */}
          <a
            href="/countries"
            target="_blank"
            className="flex flex-col items-center justify-center p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow border border-gray-200"
          >
            <div className="mb-4">
              <Globe className="text-blue-600" size={48} />
            </div>
            <h2 className="text-xl font-bold text-gray-800">Countries</h2>
            <p className="text-gray-600 text-center mt-2">
              Discover local time, date, and details of different countries
              across the world.
            </p>
          </a>

          {/* Timezone Converter */}
          <a
            href="/convert"
            target="_blank"
            className="flex flex-col items-center justify-center p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow border border-gray-200"
          >
            <div className="mb-4">
              <Clock className="text-green-600" size={48} />
            </div>
            <h2 className="text-xl font-bold text-gray-800">Time Converter</h2>
            <p className="text-gray-600 text-center mt-2">
              Convert and compare time differences between two time zones with
              ease.
            </p>
          </a>

          {/* World Time Zone */}
          <a
            href="/timezone"
            target="_blank"
            className="flex flex-col items-center justify-center p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow border border-gray-200"
          >
            <div className="mb-4">
              <Map className="text-purple-600" size={48} />
            </div>
            <h2 className="text-xl font-bold text-gray-800">World Time Zone</h2>
            <p className="text-gray-600 text-center mt-2">
              Explore world time zones and the countries that follow them.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ExploreTools;
