"use client";
import { useState } from "react";

import TableHead from "./TableHead";
import TableBody from "./TableBody";
import Table from "./Table";

interface ResultsPropos {
  Title: string;
  firstColTitle: string;
  secondColTitle: string;
  thirdColTitle: string;
}

const tableHeadData = [
  "PreferredName",
  "FullySpecifiedName",
  "DisplayNamePGOMedMij",
];

const tableBodyData = [
  {
    PreferredName: "dropped head-syndroom",
    FullySpecifiedName: "dropped head-syndroom",
    DisplayNamePGOMedMij: "dropped head-syndroom (aandoening)",
  },
  {
    PreferredName: "dropped head-syndroom2",
    FullySpecifiedName: "dropped head-syndroom2",
    DisplayNamePGOMedMij: "dropped head-syndroom (aandoening)2",
  },
  {
    PreferredName: "dropped head-syndroom3",
    FullySpecifiedName: "dropped head-syndroom3",
    DisplayNamePGOMedMij: "dropped head-syndroom (aandoening)3",
  },
];

const Results = () => {
  const [colDisplay, setColDisplay] = useState(false);

  return (
    <section className="font-sans antialiased bg-gray-100 text-gray-900 h-screen px-4">
      //btn for test
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setColDisplay(!colDisplay)}
      >
        show
      </button>
      <div className="flex flex-col justify-center h-full">
        <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
          <header className="px-5 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-800">Results</h2>
          </header>

          <Table
            tableBodyData={tableBodyData}
            tableHeadData={tableHeadData}
            display={colDisplay}
          />
        </div>
      </div>
    </section>
  );
};

export default Results;
