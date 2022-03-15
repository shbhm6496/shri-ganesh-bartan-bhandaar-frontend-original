import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-2">
            Copyright &copy; Shri Ganesh Bartan Bhandaar
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;