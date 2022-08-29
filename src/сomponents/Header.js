import "../CSS/Header.css";


import lens from "./lens.png";

function Header() {
  return (
    <div className="header">
      <div className="wrapper">
        <button className={"add button"}>Добавить</button>
        <button className={"reload button"}>Обновить</button>
        <div className="search">
          <img className="menu-img" src={lens} alt="img"></img>
          <input className="menu-input" placeholder="Событие, дата или участник"></input>
        </div>
      </div>
    </div>
  );
}

export default Header;
