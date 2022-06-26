import "./Body.css";
import Calendar from "./Calendar";

function Body() {

  let todaysDate = new Date();
  let currentDate = new Date(todaysDate.getFullYear(), todaysDate.getMonth(), 1);
  let date = {
    year: currentDate.getFullYear(),
    month: currentDate.getMonth(),
  };
  let firstCalendarDate = createFirstCalendarDate(date.year, date.month);
  let calendarDays = calendarDaysCalculating(firstCalendarDate);
  console.log(calendarDays)

  return (
    <div className="body">
      <div className="menu">
        <button className="previous-button menu-button" onClick={()=> previousButtonClick(currentDate,calendarDays,firstCalendarDate)}>&lt;</button>
        <h2 className="month-text">{textOutput(date.month, date.year)}</h2>
        <button className="next-button menu-button" onClick={()=> nextButtonClick(currentDate)}>&gt;</button>
        <button className="today-button menu-button" onClick={()=> todaysButtonClick(currentDate, todaysDate)}> Сегодня </button>
      </div>
      {/* <Calendar firstDay={firstCalendarDate}></Calendar>  */}
      <Calendar calendarDays={calendarDays}></Calendar> 

    </div>
  );
}

export default Body;

function calendarDaysCalculating(dayDate){

  let month = dayDate.getMonth(); 
  let calendarDays = [];
  for (;;) {
    for (let i = 0; i < 7; i++) { 
      calendarDays.push(dayDate.getDate() + "");
      dayDate.setDate(dayDate.getDate() + 1);
    }
    if (dayDate.getMonth() !== month + 1) {
      calendarDays[0] = 'Понедельник, ' + calendarDays[0];
      calendarDays[1] = 'Вторник, ' + calendarDays[1];
      calendarDays[2] = 'Среда, ' + calendarDays[2];
      calendarDays[3] = 'Четверг,  ' + calendarDays[3]; 
      calendarDays[4] = 'Пятница, ' + calendarDays[4];
      calendarDays[5] = 'Суббота, ' + calendarDays[5];
      calendarDays[6] = 'Воскресенье, ' + calendarDays[6];
      break;
    }
  }
  return calendarDays;
}

function createFirstCalendarDate(year, month) {
  let result = new Date(year, month);
  if (result.getDay() === 0) {
    result.setDate(result.getDate() - 7 + 1);
  } else {
    result.setDate(result.getDate() - result.getDay() + 1);
  }
  return result;
}

function textOutput(month, year){
  let output ="";
  switch(month.toString()){
    case '0': output += "Январь";  
    break;
    case '1': output += "Февраль";  
    break;
    case '2': output += "Март";  
    break;
    case '3': output += "Апрель";  
    break;
    case '4': output += "Май";  
    break;
    case '5': output += "Июнь";  
    break;
    case '6': output += "Июль";  
    break;
    case '7': output += "Август";  
    break;
    case '8': output += "Сентябрь";  
    break;
    case '9': output += "Октябрь";  
    break;
    case '10': output += "Ноябрь"; ;
    break;
    case '11': output += "Декабрь"; ;
    break;
    default: console.log("something is wrong in switch");
    break;
  }
  return output + ' ' + year;
}

function previousButtonClick(date, calendarDays, firstCalendarDate){
  console.log(date);
  date.setMonth(date.getMonth() - 1);
  firstCalendarDate = createFirstCalendarDate(date.year, date.month);
  calendarDays = calendarDaysCalculating(firstCalendarDate);
  console.log(date);
  console.log("calendar: ", calendarDays);
}

function nextButtonClick(date){
  console.log(date);
  date.setMonth(date.getMonth() + 1);
  console.log(date);
}

function todaysButtonClick(date ,todaysDate){
  console.log(date);
  date.setMonth(todaysDate.getMonth());
  console.log(date);
}
