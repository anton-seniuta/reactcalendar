import "../CSS/Modal.css";

function Modal({visibility, id}) {
  return (
    <div className={"container " + visibility} onClick={(event) => event.stopPropagation()}>
      <input className="event element" placeholder="Событие"></input>
      <input className="date element" placeholder="День, месяц, год"></input>
      <input className="names element" placeholder="Имена участников"></input>
      <input className="description element" placeholder="Описание"></input>
      <div className="button-container element">
        <button className="submit" onClick={() => submitFunction(id)}>Готово</button>
        <button className="delete">Удалить</button>
      </div>
    </div>
  );
}

export default Modal;

function submitFunction(dayID){
  let parent = document.querySelector("#"+ dayID);
  localStorage.setItem('id', dayID)
  // localStorage.setItem('event', document.querySelector("#"+ dayID+ " > .event").value);
  localStorage.setItem('event', parent.querySelector(".event").value);
  localStorage.setItem('date', parent.querySelector(".date").value);
  localStorage.setItem('names', parent.querySelector(".names").value);
  localStorage.setItem('description', parent.querySelector(".description").value);
}