import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <span className="flex justify-center">
          <img
            className="header-logo"
            src="/public/headerLogo.jpg"
            alt="eterlast-logo"
          />
        </span>
      </Link>
    </header>
  );
}

export default Header;
