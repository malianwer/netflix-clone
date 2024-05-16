import React from "react";
import "./styles.css";

import logo from "../../assets/images/logo.png";
import avatar from "../../assets/images/Netflix-avatar.png";

const Header = ({ black }) => {
  return (
    <header className={black ? "black" : ""}>
      <div className="header--logo">
        <img src={logo} />
      </div>
      <div className="header--user">
        <img src={avatar} />
      </div>
    </header>
  );
};
export default Header;
