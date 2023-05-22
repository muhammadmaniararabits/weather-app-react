import React from "react";
import "./Switch.css";

type Props = {
  switchClicked: () => void;
};

const Switch: React.FC<Props> = ({ switchClicked }) => {
  return (
    <div>
      <label className="switch">
        <input type="checkbox" onChange={switchClicked} />
        <div className="slider">
          <span>C</span>
          <span>F</span>
        </div>
      </label>
    </div>
  );
};

export default Switch;
