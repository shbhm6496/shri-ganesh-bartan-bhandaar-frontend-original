import React, { useState, useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import FormContainer from "../components/FormContainer";
import Loader from "../components/Loader";
import Message from "../components/Message";

import { userRegister } from "../action/UserAction";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [message, setMessage] = useState("");

  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, loading, userInfo } = useSelector(
    (state) => state.userRegister
  );

  const redirect = location.search ? location.search.split("=")[1] : "";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, navigate, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPass) {
      setMessage("Password not match");
    }
    dispatch(userRegister(name, email, password));
    setConfirmPass("");
    setEmail("");
    setName("");
    setPassword("");
  };

  return (
    <FormContainer>
      <h1>Sign Up</h1>
      {loading && <Loader />}
      {error}
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter the name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter the email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter the password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter the Confirm password..."
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
            required
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary">
          Register
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          Have an account?
          <Link to={redirect ? `login?redirect=${redirect}` : "/register"}>
            Login
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default RegisterPage;
