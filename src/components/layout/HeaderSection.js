import { Link } from "react-router-dom";
import logo from "../images/LOGO.jpg";
import classes from "./Header.module.css";

function HeaderSection() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
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
