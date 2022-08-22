import React from "react";
import "./Calendar.css";
import Day from "./Day";


function Calendar({calendarDays}) {
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

// class Calendar extends React.Component{
//   constructor(props) {
//     super(props); 
//     this.state = {
//       calendarDays: props.calendarDays,
//     }
    
//   }
//   render(){
//     return(
//     <div className="calendar">
//       {this.props.calendarDays.map((text, index) => (
//       <Day key={index} day={text}/>
//       ))
//       }
//     </div>
//     )
//   }
// }

// export default Calendar;