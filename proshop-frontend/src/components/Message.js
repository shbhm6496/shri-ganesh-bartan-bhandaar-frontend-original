import React from "react";
import { Alert } from "react-bootstrap";

const Message = (variant, value) => {
  return <Alert variant={variant}>{value}</Alert>;
};

Message.defaultProps = {
  variant: "info",
};

export default Message;
