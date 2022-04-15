import "./Calendar.css";
import Day from "./Day";

function Calendar() {
  let year = 2022;
  let month = 3;
  let firstCalendarDate = createFirstCalendarDate(year, month);
  let calendarDays = [];

  for (;;) {
    for (let i = 0; i < 7; i++) {
      calendarDays.push(firstCalendarDate.getDate());
      firstCalendarDate.setDate(firstCalendarDate.getDate() + 1);
    }
    if (firstCalendarDate.getMonth() !== month) break;
  }

  console.log(calendarDays);
  return (
    <div className="calendar">
      {calendarDays.map((day) => (
        <Day day={day}>{}</Day>              //нету key 
      ))}
    </div>
  );
}

function createFirstCalendarDate(year, month) {
  let result = new Date(year, month);
  result.setDate(result.getDate() - result.getDate() + 1);
  if (result.getDay === 0) {
    result.setDate(result.getDate() - 7 + 1);
  } else {
    result.setDate(result.getDate() - result.getDay() + 1);
  }
  return result;
}

export default Calendar;
