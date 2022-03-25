import React, { useState } from "react";

import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

import CheckoutSteps from "../components/CheckoutSteps";
import FormContainer from "../components/FormContainer";
import Loader from "../components/Loader";
import Message from "../components/Message";

import { SavePaymentMethod } from "../action/CartActions";

const PaymentPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { shippingAddress } = useSelector((state) => state.cart);

  if (!shippingAddress) {
    navigate("/shipping");
  }

  const [paymentMethod, setPaymentMethod] = useState(shippingAddress.address);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(SavePaymentMethod({ paymentMethod }));
    navigate("/payment");
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as="legend">Select Method</Form.Label>

          <Col>
            <Form.Check
              tyep="radio"
              label="Paypal or Credit Card"
              id="Paypal"
              name="paymentMethod"
              value="PayPal"
              checked
              onChange={(e) => setPaymentMethod(e.target.Value)}
            ></Form.Check>
            {/* <Form.Check
          tyep="radio"
          label="Paypal or Credit Card"
          id="Stripe"
          name="paymentMethod"
          value="Stripe"
          onChange={(e) => setPaymentMethod(e.target.Value)}
        ></Form.Check> */}
          </Col>
        </Form.Group>
        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default PaymentPage;
