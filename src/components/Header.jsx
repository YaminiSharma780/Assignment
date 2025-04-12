import React from "react";
import question from "../assets/question.png";
import notification from "../assets/notification.png";

function Header({ onBurgerClick, onLoginClick }) {
  return (
    <header className="header">
      <button className="burger" onClick={onBurgerClick}>
        ☰
      </button>
      <input className="search" type="text" placeholder="Search.." />
      <img src={question} />
      <img src={notification} />
      <button className="login-btn" onClick={onLoginClick}>
        Login
      </button>
    </header>
  );
}

export default Header;
