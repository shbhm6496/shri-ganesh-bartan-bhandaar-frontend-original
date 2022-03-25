import React, { useState } from "react";

import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SaveShippingAddress } from "../action/CartActions";
import CheckoutSteps from "../components/CheckoutSteps";
import FormContainer from "../components/FormContainer";
import Loader from "../components/Loader";
import Message from "../components/Message";

const ShippingPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { shippingAddress } = useSelector((state) => state.cart);

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(SaveShippingAddress({ address, city, postalCode, country }));
    navigate("/payment");
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the Address..."
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the City..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>postalCode</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the Postal  Code..."
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the Country..."
            value={city}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ShippingPage;
