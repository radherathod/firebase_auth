import React from "react";
import { FaSearch, FaSlidersH } from "react-icons/fa";
const SeachQuery = () => {
  return (
    <div className="bg-white p-3 flex items-center rounded-lg shadow-lg">
      <div className="flex items-center bg-white rounded-lg w-full px-3">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search here..."
          className="bg-transparent outline-none w-full font-gilroy text-xs"
        />
      </div>

      <button className="flex items-center bg-white hover:bg-gray-300 transition px-4 py-2 rounded-lg ml-3 h-[40px]">
        <FaSlidersH className="mr-2 font-gilroy" /> Filters
      </button>
    </div>
  );
};

export default SeachQuery;
