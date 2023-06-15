import React from "react";
import { Container } from "react-bootstrap";

export const Welcome = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <h1>Benvenuto nel mio sito di compra vendita!</h1>
    </Container>
  );
};
