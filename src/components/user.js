import React from "react";
import "./user.css";

// -------------------------------------------

function User(props) {
  return (
    <div className="user-container">
      <div className="user-name">
        <p>{props.name}</p>
      </div>
      <div className="user-main">
        <img src={props.picture} alt="undefined"></img>
      </div>
    </div>
  );
}
export default User;
