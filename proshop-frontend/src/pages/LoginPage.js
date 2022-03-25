import React, { useState, useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { userLogin } from "../action/UserAction";
import FormContainer from "../components/FormContainer";
import Loader from "../components/Loader";
import Message from "../components/Message";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, loading, userInfo } = useSelector((state) => state.userLogin);

  const redirect = location.search ? location.search.split("=")[1] : "";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, navigate, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!password && !email) {
      setMessage("Please fill the details");
      return;
    }

    dispatch(userLogin(email, password));
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <FormContainer>
        <h1>Sign In</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className="my-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter the email..."
              value={email}
              autoComplete="on"
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="my-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              autoComplete="on"
              type="password"
              placeholder="Enter the password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button type="submit" variant="primary" className="my-3">
            Sign In
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            New Customer?
            <Link to={redirect ? `register?redirect=${redirect}` : "/register"}>
              Register
            </Link>
          </Col>
        </Row>
      </FormContainer>
    </div>
  );
};

export default LoginPage;
