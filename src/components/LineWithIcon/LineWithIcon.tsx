import React from "react";
import { FiInfo } from "react-icons/fi";

const LineWithIcon = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div
        style={{
          height: "1px",
          width: "200px",
          backgroundColor: "white",
          marginLeft: "5px",
        }}
      />
      <FiInfo className="icon" />
    </div>
  );
};

export default LineWithIcon;
