import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Calender() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    {console.log(value)}
    </div>
  );
}

export default Calender;
