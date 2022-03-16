import React from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import products from "../products";

const HomePage = () => {
  return (
    <>
      <h1>Latetst Product</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} xl={3} lg={4} key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomePage;
