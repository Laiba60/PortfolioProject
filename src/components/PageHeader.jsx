import React from "react";

const PageHeader = ({ headerText, icon }) => {
  return (
    <div className="flex justify-center items-center gap-4 mb-10">
      <h2 className="text-4xl font-bold text-yellow-400">{headerText}</h2>
      <span className="text-yellow-400 text-3xl">{icon}</span>
    </div>
  );
};

export default PageHeader;
