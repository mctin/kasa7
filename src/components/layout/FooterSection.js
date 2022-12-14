import { Link } from "react-router-dom";
import classes from "./Footer.module.css";
import logo2 from "../images/LOGO2.png";

function FooterSection() {
  return (
    <footer className={classes.footer}>
      <div className={classes.logo}>
        <img src={logo2} alt="Logo" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default FooterSection;
