import React from "react";
import { useLocation } from "react-router-dom";

function Header() {
  return (
    <header className="Header">
      <div>
        <a href="/">
          <h1 className="Color">JustChat</h1>
        </a>
      </div>
      <nav>
        <a href="/login" className="Anchor_Button_Invis">
          Log In
        </a>
        <a href="/signup" className="Anchor_Button">
          Sign Up
        </a>
      </nav>
    </header>
  );
}

export default Header;
