import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product.js";
import { listProduct } from "../action/ProductAction";
import Message from "../components/Message.js";
import Loader from "../components/Loader";

const HomePage = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.listProduct);
  const { loading, error, products } = productList;
  console.log("products", products);

  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch, listProduct]);

  return (
    <>
      <h1>Latest Product</h1>
      {loading && <Loader />}
      {error && <Message>{error}</Message>}
      <Row>
        {products &&
          products.map((product) => (
            <Col sm={12} md={6} xl={3} lg={4} key={product._id}>
              <Product product={product} />
            </Col>
          ))}
      </Row>
    </>
  );
};

export default HomePage;
