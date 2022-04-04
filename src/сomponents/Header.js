import "./Header.css";

// import glass from "./glass.png";

function Header() {
  // const button = "button";

  return (
    <div className="header">
      <div className="wrapper">
        <button className={"add button"}>Добавить</button>
        <button className={"reload button"}>Обновить</button>
        <div className="search">
          {/* <img className="menu-img" src={glass} alt="img"></img>  IMAGE CAUSE ERRORS */}
          <input className="menu-input"></input>
        </div>
      </div>
    </div>
  );
}

export default Header;
