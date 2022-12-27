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
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/InfoPage">A Propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderSection;
