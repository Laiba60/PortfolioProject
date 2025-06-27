import React from "react";
import "./style.css";

const PageHeader = ({ headerText, icon }) => {
  return (
    <div className="wrapper">
      <div className="header-content">
        <h2>{headerText}</h2>
        <span>{icon}</span>
      </div>
    </div>
  );
};

export default PageHeader;
