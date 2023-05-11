import React, { useState, useEffect } from "react";
import moment from "moment";
import AnalogClock from "analog-clock-react";
import { WiSunset } from "react-icons/wi";
import "./ClockComponent.css";

type ClockProps = {
  time: number;
  iconClass: string;
};

const ClockComponent: React.FC<ClockProps> = ({ time, iconClass }) => {
  const [currentTime, setCurrentTime] = useState(moment());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const analogClockOptions = {
    useCustomTime: true,
    width: "100%",
    border: true,
    baseColor: "#0000",
    handColors: {
      second: "red",
      minute: "blue",
      hour: "black",
    },
    handLength: {
      second: 60,
      minute: 50,
      hour: 40,
    },
    "second-hand": {
      color: "#d81c7a",
      width: 1,
      length: -8,
    },
    "minute-hand": {
      color: "#2e3131",
      width: 3,
      length: -15,
    },
    "hour-hand": {
      color: "#2e3131",
      width: 5,
      length: -30,
    },
    showMinuteScale: true,
    showHourScale: true,
  };

  const formattedTime = moment(time).format("h:mm A");

  return (
    <div className="sunset-container">
      <div className="analog-clock-container">
        <AnalogClock {...analogClockOptions} time={formattedTime} />
      </div>
      <div className="sunset-time">{formattedTime}</div>
      <WiSunset className={iconClass} />
    </div>
  );
};

export default ClockComponent;
