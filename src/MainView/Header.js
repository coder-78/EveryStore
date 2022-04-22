import React, { useState } from "react";
import {
  Row,
  Dropdown,
  Navbar,
  Nav,
  Container,
  Modal,
  Button,
  Form,
  Col,
} from "react-bootstrap";
import "./MainStyle.css";

const Header = () => {
  const [show, setShow] = useState(false);
  const [isLogin, setLogin] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(isLogin, "jjjj");

  return (
    <>
      <div>
        <Navbar bg="dark" variant="dark">
          <h1 style={{ color: "white", marginLeft: "10px" }}>Every Store</h1>
          <Container>
            <Nav className="me-auto">
              <Nav.Link href="/">Shop</Nav.Link>
              <Nav.Link href="/cart">Cart</Nav.Link>
              <Nav.Link href="/addProducts">Add Products</Nav.Link>
            </Nav>

            <span>
              <Nav className="me-auto">
                <Nav.Link onClick={() => {handleShow(); sessionStorage.setItem("Login", false)}}>Login</Nav.Link>
                <Nav.Link href="/signup">SignUp</Nav.Link>
              </Nav>
            </span>
          </Container>
        </Navbar>

        <div className="modalStyle">
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>LOGIN</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="validationCustom01">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Username" />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="validationCustom05">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                </Row>

                <Button
                  onClick={() => {
                    sessionStorage.setItem("Login", true)
                    handleClose();
                  }}
                >
                  Login
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Header;
