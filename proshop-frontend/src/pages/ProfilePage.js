import React, { useState, useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import Message from "../components/Message";

import { getUserDetails, updateUserProfile } from "../action/UserAction";

const ProfilePage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [message, setMessage] = useState("");

  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.userLogin);
  const { loading, error, user } = useSelector((state) => state.userDetails);
  const { success } = useSelector((state) => state.userUpdate);

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
    if (!user) {
      dispatch(getUserDetails("profile"));
    } else {
      setName(user.name);
      setEmail(user.email);
    }
  }, [userInfo, navigate, dispatch, user]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPass) {
      setMessage("Password not match");
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }));
    }
    //dispatch(userRegister(name, email, password));
    setConfirmPass("");
    setEmail("");
    setName("");
    setPassword("");
  };

  return (
    <Row>
      <Col md={3}>
        <h2>User Profile</h2>
        {message ? <Message varinat="danger">{error}</Message> : ""}
        {/* {error ? <Message varinat="danger">{error}</Message> : ""} */}
        {success ? <Message varinat="danger">Profile Updated!!</Message> : ""}
        {loading ? <Loader /> : ""}
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
            Update
          </Button>
        </Form>
      </Col>
      <Col md={9}>
        <h2>My Orders</h2>
      </Col>
    </Row>
  );
};

export default ProfilePage;
