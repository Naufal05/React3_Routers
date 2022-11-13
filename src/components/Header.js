import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div class="header">
      <Link to="#default" class="logo">
        MNZ.Inc
      </Link>
      <div class="header-right">
        <Link class="active" to="#home">
          Home
        </Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}
export default Header;
