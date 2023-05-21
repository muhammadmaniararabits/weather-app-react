import React from "react";
import "./Switch.css";

const Switch: React.FC = () => {
  return (
    <div>
      <label className="switch">
        <input type="checkbox" />
        <div className="slider">
          <span>C</span>
          <span>F</span>
        </div>
      </label>
    </div>
  );
};

export default Switch;
