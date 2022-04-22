import React, { useState } from "react";
import { Image, Card, Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Header from "./Header";
import data from "./Products";
import "./MainStyle.css";
import { isNull } from "lodash";

const ProductDetail = () => {
  const [count, setCount] = useState(0);
  const { id } = useParams();
  const product = data.find((v) => v.id == id);

  const addOrder = () => {
    var dataOrder = sessionStorage.getItem("Order");
    var array = [];
    array = isNull(dataOrder) ? [] : JSON.parse(dataOrder);
    console.log(array, "arrayyyyy");
    const object = {
      Name: product.title,
      Image: product.image,
      Price: product.price * count,
      Order: count,
      id: product.id,
    };
    array.push(object);
    sessionStorage.setItem("Order", JSON.stringify(array)); 
  };

  // console.log(product.price * count, "array");
  return (
    <div>
      <Header />
      <Container fluid className="detailStyle">
        <Row>
          <Col lg="4">
            <Card style={{ width: "25rem" }} className="cardStyle">
              <Card.Img variant="top" height={420} src={product.image} />
            </Card>
          </Col>

          <Col lg="6">
            <br />
            <h1>{product.title}</h1>
            <h5>Price: ${product.price}</h5>
            <hr />
            <br />
            <label>{product.description}</label>
            <hr />

            <Row>
              <Col lg="1">
                <Button
                  onClick={() => {
                    count == 0 ? setCount(0) : setCount(count - 1);
                  }}
                >
                  -
                </Button>
              </Col>
              <Col lg="1">
                <Form.Text>{count}</Form.Text>
              </Col>
              <Col lg="1">
                <Button onClick={() => setCount(count + 1)}>+</Button>
              </Col>

              <Col lg="3">
              <h6>Total Price: ${product.price * count}</h6>
              </Col>

              <Col lg="3">
                {
                  count == 0 ?
                  <Button disabled>Confirm Order</Button> :
                  <Link to={"/cart"}>
                <Button onClick={() => addOrder()}>Confirm Order</Button>
                </Link>
                }
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetail;
