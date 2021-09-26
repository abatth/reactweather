import React from "react";
import "./ErrorMessage.scss";

function ErrorMessage(props) {
  return <h3 className="error-message">{props.error}</h3>;
}

export default ErrorMessage;
