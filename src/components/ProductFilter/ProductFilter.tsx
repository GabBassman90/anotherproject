import React, {
  ChangeEventHandler,
  FormEventHandler,
  MouseEventHandler,
} from "react";
import { Col, Row, Form } from "react-bootstrap";

type FormControlElement = any;
type Props = {
  handleFilterSubmit: FormEventHandler<HTMLFormElement>;
  nameFilter: string;
  handleNameFilterChange: ChangeEventHandler<FormControlElement>;
  priceFilter: string;
  handlePriceFilterChange: ChangeEventHandler<FormControlElement>;
  resetFilter: MouseEventHandler<HTMLButtonElement>;
};

export const ProductFilter = ({
  handleFilterSubmit,
  nameFilter,
  handleNameFilterChange,
  priceFilter,
  handlePriceFilterChange,
  resetFilter,
}: Props) => {
  return (
    <Form onSubmit={handleFilterSubmit}>
      <Row className="mb-3">
        <Col>
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            placeholder="Filtra il nome"
            value={nameFilter}
            onChange={handleNameFilterChange}
          />
        </Col>
        <Col>
          <Form.Label>Prezzo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Filtra per prezzo"
            value={priceFilter}
            onChange={handlePriceFilterChange}
          />
        </Col>
        <Col xs={12} className="d-flex justify-content-end mt-3">
          <button type="submit" className="btn btn-primary">
            Filtra
          </button>
          <button onClick={resetFilter} className="btn btn-primary">
            Reset
          </button>
        </Col>
      </Row>
    </Form>
  );
};
