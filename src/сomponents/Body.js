import "./Body.css";
import Calendar from "./Calendar";

function Body() {

  let exactDate = new Date();

  let date = {
    year: exactDate.getFullYear(),
    month: exactDate.getMonth(),
  };
  let firstCalendarDate = createFirstCalendarDate(date.year, date.month);

  return (
    <div className="body">
      <div className="menu">
        <button className="previous-button menu-button" onClick={()=> previousButtonClick(exactDate)}>&lt;</button>
        <h2 className="month-text">{textOutput(date.month, date.year)}</h2>
        <button className="next-button menu-button">&gt;</button>
        <button className="today-button menu-button"> Сегодня </button>
      </div>
      <Calendar firstDay={firstCalendarDate}></Calendar> 
    </div>
  );
}

export default Body;

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

function previousButtonClick(date){
  console.log(date);
  date.setMonth(date.getMonth() - 1);
  console.log(date);
}

