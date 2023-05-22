import React from "react";
import moment from "moment";
import "./DateTimeComponent.css";

type Props = {
  dateTime: string;
};

const DateTimeComponent: React.FC<Props> = ({ dateTime }) => {
  const date = moment(dateTime).format("Do MMM YY");
  const day = moment(dateTime).format("dddd");
  const time = moment(dateTime).format("hh:mm A");

  return (
    <div className="component-box">
      <div className="date-box"> {date} </div>
      <div className="component-inner-box">
        <div className="day-box"> {day} </div>
        <div className="time-box"> {time} </div>
      </div>
    </div>
  );
};

export default DateTimeComponent;
