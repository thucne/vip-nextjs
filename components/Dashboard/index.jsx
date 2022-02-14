import React from "react";
import WordsVerticalList from "./WordsVerticalList";

/**
 * @author
 * @function
 **/

const Dashboard = (props) => {
  return (
    <div className="flex flex-col md:flex-row p-3 md:p-10 h-screen">
      <div className="flex flex-col md:basis-1/2 md:border-r-[1px] md:border-r-gray-300 h-full overflow-hidden">
            <WordsVerticalList/>
      </div>

      <div className="flex flex-col w-full  md:basis-1/2 h-full">
          Right Side
      </div>
    </div>
  );
};

export default Dashboard;
