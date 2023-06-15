import React from 'react';
import { Model } from '../../model/Model';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import {useFetchProducts} from "../hook/useFetchProduct"

export const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const products: Model[] = useFetchProducts();
  const product: Model | undefined = products.find((item: Model) => item.id === Number(id));

  return (
    !product ? <div>Loading...</div> :
    <div className="d-flex justify-content-center mt-3">
      <Card className="w-50">
        <Card.Img variant="top" src={product.image} alt={product.description} />
        <Card.Body>
          <Card.Title>{product.category}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>${product.price.toFixed(2)}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};