import React from "react";
import "./LineWithIcon.css";

const LineWithIcon = () => {
  return (
    <div className="line-box">
      <div className="line-info" />
      <img
        className="info-image"
        src={require("../../Assets/infoIcon.png")}
        alt="Info icon"
      />
    </div>
  );
};

export default LineWithIcon;
