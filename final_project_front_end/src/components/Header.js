import React from "react";
import { useLocation } from "react-router-dom";

function Header({ loggedIn, LogOutFunction }) {
  return (
    <header className="Header">
      <div>
        <a href="/">
          <h1 className="Color">GlassBottle</h1>
        </a>
      </div>

      <nav>
        {loggedIn ? (
          <>
            <a href="/discover" className="Anchor_Button">
              Discover
            </a>

            <a
              href="/login"
              className="Anchor_Button_Invis"
              onClick={() => LogOutFunction()}
            >
              Log Out
            </a>
          </>
        ) : (
          <>
            <a href="/login" className="Anchor_Button_Invis">
              Log In
            </a>
            <a href="/signup" className="Anchor_Button">
              Sign Up
            </a>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
