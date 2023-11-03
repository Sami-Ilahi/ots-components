"use client";
import { useState } from "react";

import SelectFilter from "./SelectFilter";

// options for select
const selectdata = [
  { "code System": ["code system 1", "code system 2"] },
  { "Another filter": ["filter 1", "filter 2"] },
];

const Filters = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <button
        className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="mr-2">Filters</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 ml-2 -mr-1"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        }  w-1/4 rounded-md shadow-lg bg-white p-1 space-y-1`}
      >
        <div className="flex">
          {selectdata.map((item) => {
            const [options] = Object.values(item);
            console.log("######", options);
            return <SelectFilter key={selectdata.length++} options={options} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Filters;
