import { NavLink } from "react-router-dom";
import logo from "./../../assets/images/LOGO.jpg";
import "./Header.css";

function HeaderSection() {
  return (
    <header className={"header"}>
      <div className={"logohead"}>
        <img src={logo} alt="Logo" />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink className={"accueil"} to="/">
              ACCUEIL
            </NavLink>
          </li>
          <li>
            <NavLink className={"apropos"} to="/InfoPage">
              A PROPOS
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderSection;
