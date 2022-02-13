import React from "react";
import WordsVerticalList from "./WordsVerticalList";

/**
 * @author
 * @function
 **/

const Dashboard = (props) => {
  return (
    <div className="flex p-10 h-screen">
      <div className="flex flex-col basis-1/2 border-r-[1px] border-r-gray-300 h-full">
            <WordsVerticalList/>
      </div>

      <div className="flex flex-col basis-1/2 h-full">
          
      </div>
    </div>
  );
};

export default Dashboard;
