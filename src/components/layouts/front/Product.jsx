 
import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText,Col } from "reactstrap";
import { Link } from "react-router-dom";

const Product= ({ products }) => {
  return (
    <>
      <Col md="4">
          <Card style={{ background: "transparent" }}>
          <CardTitle  className=""> <h3>{products.name}</h3></CardTitle>
            <Link to={`/reviews/${products._id}`}>
              <CardImg
                top
                width="100%"
                src={products.imageUrl}
                alt={products.name}
              />
            </Link>
            <CardBody>
                <CardTitle  className=""><strong>CATEGORY:</strong> {products.category}</CardTitle>
                <CardText  className=""><strong>PRICE:</strong> {`$${products.price}`}</CardText>
            </CardBody>
          </Card>
      </Col>
    </>
  );
};

export default Product;