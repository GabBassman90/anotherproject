import React from "react";
import useFetchProducts from "../hook/useFetchProduct";
import { Model } from "../../model/Model";
import { Card, Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useFilters } from "../hook/useFilters";
import { ProductFilter } from "../ProductFilter/ProductFilter";

export const Home = () => {
  const products: Model[] = useFetchProducts();
  const {
    filteredProducts,
    handleFilterSubmit,
    handleNameFilterChange,
    handlePriceFilterChange,
    nameFilter,
    priceFilter,
    resetFilter,
  } = useFilters(products);
  return (
    <Container>
      <ProductFilter
        handleFilterSubmit={handleFilterSubmit}
        handleNameFilterChange={handleNameFilterChange}
        handlePriceFilterChange={handlePriceFilterChange}
        nameFilter={nameFilter}
        priceFilter={priceFilter}
        resetFilter={resetFilter}
      />

      <Row xs={1} md={2} className="g-4">
        {filteredProducts.map((item: Model) => (
          <Col key={item.id}>
            <Link to={`/product/${item.id}`} className="card">
              <Card>
                <Card.Img
                  variant="top"
                  src={item.image}
                  alt={item.description}
                />
                <Card.Body>
                  <Card.Title>{item.category}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Card.Text>${item.price.toFixed(2)}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
