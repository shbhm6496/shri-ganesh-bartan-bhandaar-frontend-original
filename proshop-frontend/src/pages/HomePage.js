import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import axios from "axios";
import { useParams } from "react-router-dom";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  const params = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products/");
      setProducts(data);
    };
    fetchProducts();
  }, []);
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
