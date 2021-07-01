import React from "react";
import { HelpCircle } from "react-feather";
import { Link } from "react-router-dom";
import logo from "../../images/logos/logo.png";

const Navigation = () => {
  return (
    <nav>
      <div className="navigation">
        <div className="logo">
          <Link to="">
            <img src={logo} alt="" />
          </Link>
        </div>
        <ul className="menu">
          <li>
            <Link to="">About</Link>
          </li>
          <li>
            <Link to="">Claim</Link>
          </li>
          <li>
            <Link to="">Sign In</Link>
          </li>
          <li>
            <Link>
              <HelpCircle size={15} />
              &nbsp;Help
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
