import React from "react";

const PageHeader = ({ headerText, icon }) => {
  return (
    <div className="w-full py-10 flex justify-center items-center">
      <div className="flex items-center gap-4">
        
        <h2 className="text-4xl font-bold text-yellow-400">
          {headerText}
        </h2>

        <span className="text-yellow-400 text-3xl">
          {icon}
        </span>

      </div>
    </div>
  );
};

export default PageHeader;
