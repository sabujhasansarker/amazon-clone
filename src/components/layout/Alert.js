import React from "react";

const Alert = ({ msg }) => {
  return (
    <div
      className={`alert ${msg.option === "add" ? "add-item" : "remove-item"}`}
    >
      <p>{msg.msg}</p>
    </div>
  );
};

export default Alert;
