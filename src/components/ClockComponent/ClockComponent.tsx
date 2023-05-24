import React, { useState, useEffect } from "react";
import moment from "moment";
import AnalogClock from "analog-clock-react";
import "./ClockComponent.css";

type ClockProps = {
  title: string;
  time: string;
  image: string;
};

const ClockComponent: React.FC<ClockProps> = ({ title, time, image }) => {
  const formattedTime = moment(time, "HH:mm");

  const hour = formattedTime.hour();
  const minute = formattedTime.minute();
  const second = formattedTime.second();
  const timeInFormat = formattedTime.format("h:mm A");

  const analogClockOptions = {
    useCustomTime: true,
    width: "100%",
    baseColor: "#0000",
    handColors: {
      minute: "#0038FF",
      hour: "#4F4F4F",
      second: "#FF0000",
    },
    seconds: second,
    minutes: minute,
    hours: hour,
  };

  return (
    <div className="clock-container">
      <div className="clock-title">{title}</div>
      <div className="clock-card">
        <div className="analog-clock-container">
          <AnalogClock {...analogClockOptions} time={formattedTime} />
        </div>
        <div className="clock-time">{timeInFormat}</div>
        <img
          className="clock-image"
          src={require(`../../Assets/${image}.png`)}
        />
      </div>
    </div>
  );
};

export default ClockComponent;
