import "../CSS/Day.css";
import Modal from "../UI/Modal";
import {useState} from "react";

function Day({ day, id }) {

  const [visibility, setVisibitily] = useState("hidden");

  
  return (
    <div className="day" id={id} onClick={()=> showPopUp(visibility, setVisibitily)}>
      {day}
      <Modal visibility = {visibility} id={id}></Modal>
    </div>
  ); 
}
  
export default Day;

function showPopUp(visibility, setVisibitily) {
  if(visibility === "hidden") setVisibitily("visible");
  else setVisibitily("hidden");
}
