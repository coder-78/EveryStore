import { get, isEmpty, isNull } from "lodash";
import React, { useState} from "react";
import { Container, Row, Card, Col, Button, Modal, Form } from "react-bootstrap";
import Header from "./Header";

const Cart = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const dataOrder = JSON.parse(sessionStorage.getItem("Order"));
  var totalPrice = !isEmpty(dataOrder) && dataOrder.map((y) => {
    return (
      y != null && y.Price
    )
  });

  function myFunction(total, value) {
    return total + value;
  }

  const deleteFunction = (id) => {
    delete dataOrder[id];
    sessionStorage.setItem("Order", JSON.stringify(dataOrder));
    window.location.reload();
  }


  return (
    <div>
      <Header />

      <Container fluid>
        <Row>
          <h1>Your Orders</h1>
        </Row>
        <Row>
          <Col>
            {!isEmpty(dataOrder) &&
              dataOrder.map((v, index) => {
                return (
                  <>
                    <div key={index}>
                      {v != null &&
                      <Row>
                        <Col lg="1">
                          <Card style={{ width: "6rem" }} className="cardStyle">
                            <Card.Img variant="top" height={60} src={v.Image} />
                          </Card>
                        </Col>
                        <Col lg="6">
                          <h4>{v.Name}</h4>
                          <Row>
                            <Col lg="2">
                          <label>Quantity: {v.Order}</label>
                          </Col>
                          <Col lg="2">
                          <label>Price: ${v.Price}</label>
                          </Col>
                          </Row>
                        </Col>
                        <Col lg="4">
                          <Button onClick={() => deleteFunction(index)}>Delete</Button>
                        </Col>
                        <hr/>
                      </Row>
              }       
                    </div>
                  </>
                );
              })}
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          {isEmpty(dataOrder) ? 
          <Col>
          <h1>You don't have any products in your cart.</h1>
          </Col>
          :
          <>
          <Col lg="4">
          <h2>Total Price: ${!isEmpty(totalPrice) && totalPrice.reduce(myFunction)}</h2>
          </Col>

          <Col lg="3">
          <Button onClick={() => {handleShow()}}>Place Order</Button>
          </Col>
          </>
}
          <Col lg="3">
            <a href="http://localhost:3000/">
          <Button>Continue Shopping</Button>
          </a>
          </Col>
        </Row>
      </Container>

      <div className="modalStyle">
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="validationCustom01">
                    <Form.Label>Your Order has been Placed! Thank You for Shopping with us.</Form.Label>
                  </Form.Group>
                </Row>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => handleClose()}>Ok</Button>
            </Modal.Footer>
          </Modal>
        </div>
    </div>
  );
};

export default Cart;
