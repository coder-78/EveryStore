import React, { useState } from "react";
import {
  Row,
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
  const [isLogin, setLogin] = useState("");

  const [lUser, setLUser] = useState("");
  const [lPass, setLPass] = useState("");
  const [sName, setSName] = useState("");
  const [sUser, setSUser] = useState("");
  const [sPass, setSPass] = useState("");


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <div>
        <Navbar bg="dark" variant="dark">
          <h1 style={{ color: "white", marginLeft: "10px" }}>Every Store</h1>
          <Container>
            <Nav className="me-auto">
              <Nav.Link href="/">Shop</Nav.Link>
              <Nav.Link href="/cart">Cart</Nav.Link>
              <Nav.Link>Add Products</Nav.Link>
            </Nav>

            <span>
              {sessionStorage.getItem("Login") == "true" ? (
                <>
                  <Nav className="me-auto">
                    <Nav.Link
                      onClick={() => {
                        sessionStorage.setItem("Login", false);
                        window.location.reload();
                      }}
                    >
                      Logout
                    </Nav.Link>
                  </Nav>
                </>
              ) : (
                <Nav className="me-auto">
                  <Nav.Link
                    onClick={() => {
                      handleShow();
                      sessionStorage.setItem("Login", false);
                      setLogin("Login");
                    }}
                  >
                    Login
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => {
                      handleShow();
                      setLogin("Sign");
                    }}
                  >
                    SignUp
                  </Nav.Link>
                </Nav>
              )}
            </span>
          </Container>
        </Navbar>

        <div className="modalStyle">
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
                {isLogin == "Sign" ? "Signup" : "Login"}
              </Modal.Title>
            </Modal.Header>
            {isLogin == "Sign" ? (
              <Modal.Body>
                <Form>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="validationCustom01">
                      <Form.Label>Name</Form.Label>
                      <Form.Control onChange={(e) => setSName(e.target.value)} type="text" placeholder="Name" />
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="validationCustom05">
                      <Form.Label>Username</Form.Label>
                      <Form.Control onChange={(e) => setSUser(e.target.value)} type="text" placeholder="Username" />
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="validationCustom05">
                      <Form.Label>Password</Form.Label>
                      <Form.Control onChange={(e) => setSPass(e.target.value)} type="password" placeholder="Password" />
                    </Form.Group>
                  </Row>

                  <Button
                  disabled={sUser == "" || sPass == "" || sName == "" ? true : false}
                    onClick={() => {
                      sessionStorage.setItem("Login", true);
                      handleClose();
                      window.location.reload();
                    }}
                  >
                    Signup
                  </Button>
                </Form>
              </Modal.Body>
            ) : (
              <Modal.Body>
                <Form>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="validationCustom01">
                      <Form.Label>Username</Form.Label>
                      <Form.Control onChange={(e) => setLUser(e.target.value)} type="text" placeholder="Username" />
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="validationCustom05">
                      <Form.Label>Password</Form.Label>
                      <Form.Control onChange={(e) => setLPass(e.target.value)} type="password" placeholder="Password" />
                    </Form.Group>
                  </Row>

                  <Button
                  disabled={lUser == "" || lPass == "" ? true : false}
                    onClick={() => {
                      sessionStorage.setItem("Login", true);
                      handleClose();
                      window.location.reload();
                    }}
                  >
                    Login
                  </Button>
                </Form>
              </Modal.Body>
            )}
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Header;
