import React from "react";
import "../styles/ErrorPage.css";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="errorpage">
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <Link className="homepage" to="/">
        <p>Retourner sur la page d'accueil</p>
      </Link>
    </div>
  );
}
export default ErrorPage;
