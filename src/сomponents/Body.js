import "./Body.css";
import Calendar from "./Calendar";

function Body() {
  return (
    <div className="body">
      <div className="menu">
        <button className="previous-button menu-button">&lt;</button>
        <h2 className="month-text">Март 2013</h2>
        <button className="next-button menu-button">&gt;</button>
        <button className="today-button menu-button"> Сегодня </button>
      </div>
      <Calendar></Calendar> 
    </div>
  );
}

export default Body;
 