import React, { useEffect } from "react";

import { AddToCart, RemoveFromCart } from "../action/CartActions.js";

import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation, Link, useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  Col,
  Form,
  Image,
  ListGroup,
  Row,
} from "react-bootstrap";
import Message from "../components/Message.js";
const CartPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);

  console.log(cartItems);
  const productId = params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  useEffect(() => {
    if (productId) {
      dispatch(AddToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeItemFromCartHandler = (id) => {
    dispatch(RemoveFromCart(id));
  };

  const checkoutHandler = () => {
    navigate("/login?redirect=shipping");
  };

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length == 1 ? (
          <Message>
            Your Cart is Empty!!<Link to="/">Go To Home</Link>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.Image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>${item.price}</Col>
                  <Col md={2}>
                    <Form.Control
                      as="select"
                      onChange={(e) =>
                        dispatch(
                          AddToCart(item.product, Number(e.target.value))
                        )
                      }
                      value={item.qty}
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option value={x + 1} key={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => removeItemFromCartHandler(item.product)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>
                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                Items
              </h2>
              $
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type="button"
                className="btn-block w-100"
                disabled={cartItems.length == 0}
                onClick={checkoutHandler}
              >
                Proceed to Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default CartPage;
