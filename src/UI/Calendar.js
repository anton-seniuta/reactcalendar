import "../CSS/Calendar.css";

import Day from "../сomponents/Day";

function Calendar({ calendarDays, visibility }) {
  return (
    <div className="calendar">
      {calendarDays.map((text, index) => (
        <Day key={index} day={text} id={"id"+index}/>
      ))}
    </div>
  );
}
export default Calendar;
