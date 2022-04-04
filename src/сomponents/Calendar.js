import "./Calendar.css";
import Day from "./Day";
let date = new Date();
console.log(date);
console.log(date.getMonth());

date.setMonth(date.getMonth() + 1);
console.log(date);

function firstCalendarDay(date) {
  console.log(date);

  let value = date;
  console.log(value);
  value.setDate(value.getDate() - value.getDate() + 1);

  let firstDay = value.getDay();
  if (firstDay === 0) firstDay = 7;

  console.log(firstDay);

  value.setMonth(value.getMonth() + 1);
  value.setDate(value.getDate() - 1);

  let lastDay = value.getDay();
  if (lastDay === 0) lastDay = 7;

  console.log(lastDay);

  let daysAmount = value.getDate() + (7 - lastDay) + firstDay;
  let days = [];

  console.log(daysAmount);

  for (let i = 1; i < daysAmount; i++) {
    console.log(i);
  }

  return <Day text={days}></Day>;
}

function Calendar() {
  return <div className="calendar">{firstCalendarDay(date)}</div>;
}

export default Calendar;
