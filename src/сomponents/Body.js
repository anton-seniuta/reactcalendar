// import { useState } from "react";
import "./Body.css";
import Calendar from "./Calendar";

function Body() { 
  let todaysDate = new Date();
  // let currentDate = Date.now(todaysDate.getFullYear(), todaysDate.getMonth(), 1);
  // let currentDateForCount = new Date(currentDate);
  let firstCalendarDate = createFirstCalendarDate(todaysDate.getFullYear(), todaysDate.getMonth());

  let calendarDays = calendarDaysCalculating(firstCalendarDate);
  // const [calendarDays, setCalendarDays] = useState(calendarDaysCalculating(firstCalendarDate));

  return (
    <div className="body">
      <div className="menu">
        <button className="previous-button menu-button" onClick={() => previousButtonClick()}>
          &lt;
        </button>
        <h2 className="month-text">{textOutput(todaysDate.getFullYear(), todaysDate.getMonth())}</h2>
        <button className="next-button menu-button" onClick={() => nextButtonClick()}>
          &gt;
        </button>
        <button className="today-button menu-button" onClick={() => todaysButtonClick()}>
          Сегодня
        </button>
      </div>
      <Calendar calendarDays={calendarDays}></Calendar>
    </div>
  );
}

export default Body;

function calendarDaysCalculating(firstDayDate) {
  let date = new Date(firstDayDate);
  let month = date.getMonth();
  let calendarDays = [];

  // let calendarDays= {
  //    id:
  // };
  console.log(month);
  console.log(date.getMonth());

  for (;;) {
    for (let i = 0; i < 7; i++) {
      calendarDays.push(date.getDate() + "");
      date.setDate(date.getDate() + 1);
    }
    if (date.getMonth() === month + 1) {
      calendarDays[0] = "Понедельник, " + calendarDays[0];
      calendarDays[1] = "Вторник, " + calendarDays[1];
      calendarDays[2] = "Среда, " + calendarDays[2];
      calendarDays[3] = "Четверг,  " + calendarDays[3];
      calendarDays[4] = "Пятница, " + calendarDays[4];
      calendarDays[5] = "Суббота, " + calendarDays[5];
      calendarDays[6] = "Воскресенье, " + calendarDays[6];
      break;
    }
  }
  console.log(calendarDays);
  return calendarDays;
}

function createFirstCalendarDate(year, month) {
  let result = new Date(year, month);
  if (result.getDay() === 0) {
    result.setDate(result.getDate() - 7 + 1);
  } else {
    result.setDate(result.getDate() - result.getDay() + 1);
  }
  return result.getTime();
}

function textOutput(year, month) {
  let output = "";
  switch (month.toString()) {
    case "0":
      output += "Январь";
      break;
    case "1":
      output += "Февраль";
      break;
    case "2":
      output += "Март";
      break;
    case "3":
      output += "Апрель";
      break;
    case "4":
      output += "Май";
      break;
    case "5":
      output += "Июнь";
      break;
    case "6":
      output += "Июль";
      break;
    case "7":
      output += "Август";
      break;
    case "8":
      output += "Сентябрь";
      break;
    case "9":
      output += "Октябрь";
      break;
    case "10":
      output += "Ноябрь";
      break;
    case "11":
      output += "Декабрь";
      break;
    default:
      console.log("something is wrong in switch");
      break;
  }
  return output + " " + year;
}

function previousButtonClick() {}

function nextButtonClick() {}

function todaysButtonClick() {}