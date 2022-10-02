import "../CSS/Day.css";
import Modal from "../UI/Modal";
import {useState} from "react";

function Day({ day }) {

  const [visibility, setVisibitily] = useState("hidden");

  
  return (
    <div className="day" onClick={()=> showPopUp(visibility, setVisibitily)}>
      {day} 
      {/* <Modal onClick={()=>onClickForChild()} visibility = {visibility}></Modal> */}
      <Modal visibility = {visibility} submitFunction = {submitFunction}></Modal>
    </div>
  ); 
}
  
export default Day;

function showPopUp(visibility, setVisibitily) {
  if(visibility === "hidden") setVisibitily("visible");
  else setVisibitily("hidden");
}

function submitFunction(event, date, names, description){
  let eventValue = document.getElementsByClassName("event").value;
  console.log(eventValue);
  localStorage.setItem('event', event);
  localStorage.setItem('date', date);
  localStorage.setItem('names', names);
  localStorage.setItem('description', description);



}

// function onClickForChild(){
// }