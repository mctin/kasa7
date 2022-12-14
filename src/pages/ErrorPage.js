import React from "react";
import "../styles/ErrorPage.css";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="nomatch">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link className="backhome" to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}
export default ErrorPage;
