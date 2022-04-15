import "./Day.css";

// let info = {
//   date: new Date(),
//   day: this.date.setDay(),
//   topic: '',
//   text: ''
// }

function Day(props) {
  return <div className="day">
      {props.day}
      
  </div>;
}

export default Day; 