import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center my-3">
      <h4>Aw! Snap!!</h4>
      <h2>Look Like You are Lost! Allow me to help You!!</h2>
      <Link to="/">
        <Button>Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
