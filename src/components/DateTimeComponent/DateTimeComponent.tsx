import React from "react";
import moment from "moment";

interface Props {}

const DateTimeComponent: React.FC<Props> = () => {
  const date = moment().format("Do MMM YY");
  const day = moment().format("dddd");
  const time = moment().format("hh:mm A");

  return (
    <div>
      <div>
        {date}
        <br />
        {day} {time}
      </div>
    </div>
  );
};

export default DateTimeComponent;
