import "../CSS/Modal.css";

function Modal(props) {
  return (
    <form className={"container " + props.visibility} onClick={(event) => event.stopPropagation()}>
      <input className="event element" placeholder="Событие"></input>
      <input className="date element" placeholder="День, месяц, год"></input>
      <input className="names element" placeholder="Имена участников"></input>
      <input className="description element" placeholder="Описание"></input>
      <div className="button-container element">
        {/* <button className="submit" onClick={() => props.submitFunction(document.getElementsByClassName("event"),document.getElementsByClassName("date"),document.getElementsByClassName("names"),document.getElementsByClassName("description"))}>Готово</button> */}
        <button className="submit" onClick={() => props.submitFunction()}>Готово</button>
        <button className="delete">Удалить</button>
      </div>
    </form>
  );
}

export default Modal;
