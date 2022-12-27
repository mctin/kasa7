import { Link } from "react-router-dom";
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
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/InfoPage">A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderSection;
