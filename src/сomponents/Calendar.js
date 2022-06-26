import "./Calendar.css";
import Day from "./Day";


function Calendar(props) {

  // let dayDate = new Date(props.firstDay.getFullYear(), props.firstDay.getMonth(), props.firstDay.getDate());
  // let calendarDays = calendarDaysCalculating(dayDate); //make  objects  add ids  
  let calendarDays = props.calendarDays;
  
  return (
    <div className="calendar">
      {calendarDays.map((text, index) => (
      <Day key={index} day={text}/>
      ))
      }
    </div>
  );

}
  
export default Calendar;
 
// function calendarDaysCalculating(dayDate){

//   let month = dayDate.getMonth(); 
//   let calendarDays = [];
//   for (;;) {
//     for (let i = 0; i < 7; i++) { 
//       calendarDays.push(dayDate.getDate() + "");
//       dayDate.setDate(dayDate.getDate() + 1);
//     }
//     if (dayDate.getMonth() !== month + 1) {
//       calendarDays[0] = 'Понедельник, ' + calendarDays[0];
//       calendarDays[1] = 'Вторник, ' + calendarDays[1];
//       calendarDays[2] = 'Среда, ' + calendarDays[2];
//       calendarDays[3] = 'Четверг,  ' + calendarDays[3]; 
//       calendarDays[4] = 'Пятница, ' + calendarDays[4];
//       calendarDays[5] = 'Суббота, ' + calendarDays[5];
//       calendarDays[6] = 'Воскресенье, ' + calendarDays[6];
//       break;
//     }
//   }
//   console.log(calendarDays)
//   return calendarDays;
// }

//buttons
//inputting notes
//highlighting notes
//local storage
