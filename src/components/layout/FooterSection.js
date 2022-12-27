import { Link } from "react-router-dom";
import "./Footer.css";
import logo2 from "./../../assets/images/LOGO2.png";

function FooterSection() {
  return (
    <footer className={"footer"}>
      <div className={"logo"}>
        <img src={logo2} alt="Logo" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default FooterSection;
