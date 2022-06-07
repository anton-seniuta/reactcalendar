import "./Calendar.css";
import Day from "./Day";


function Calendar(props) {
  let month = props.firstDay.getMonth(); 
  let calendarDays = [];

  for (;;) {
    for (let i = 0; i < 7; i++) {
      calendarDays.push(props.firstDay.getDate() + "");
      props.firstDay.setDate(props.firstDay.getDate() + 1);
    }
    if (props.firstDay.getMonth() !== month + 1) break;
  }

  calendarDays[0] = 'Понедельник, ' + calendarDays[0];
  calendarDays[1] = 'Вторник, ' + calendarDays[1];
  calendarDays[2] = 'Среда, ' + calendarDays[2];
  calendarDays[3] = 'Четверг,  ' + calendarDays[3];
  calendarDays[4] = 'Пятница, ' + calendarDays[4];
  calendarDays[5] = 'Суббота, ' + calendarDays[5];
  calendarDays[6] = 'Воскресенье, ' + calendarDays[6];

  console.log(calendarDays)

  return (
    <div className="calendar">
      {calendarDays.map((text, index) => (
          <Day key={index} day={text}>{}</Day>
      ))}
    </div>
  );
}
  
export default Calendar;
 