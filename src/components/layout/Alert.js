import React from "react";
import "./alert.scss";
const Alert = ({ msg, index }) => {
  return (
    <div
      className={`alert ${msg.option === "add" ? "add-item" : "remove-item"}`}
      style={{ top: index * 10 + "%", marginTop: index + 65 + "px" }}
    >
      <p>{msg.msg}</p>
    </div>
  );
};

export default Alert;
