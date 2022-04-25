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

import { saveData } from "./Action";
import { connect } from "react-redux";
import { isEmpty, isUndefined } from "lodash";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [show, setShow] = useState(false);
  const [isLogin, setLogin] = useState("");

  const [lUser, setLUser] = useState("");
  const [lPass, setLPass] = useState("");
  const [sName, setSName] = useState("");
  const [sUser, setSUser] = useState("");
  const [sPass, setSPass] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const saveData = (ind, val) => {
    sessionStorage.setItem(`${ind}`, val);
  };

  const auth = () => {
    if (
      sessionStorage.getItem("Username") == lUser &&
      sessionStorage.getItem("Password") == lPass
    ) {
      sessionStorage.setItem("Login", true);
      window.location.reload();
    } else {
      sessionStorage.setItem("Login", false);
      handleShow()
      setLogin("Invalid");
    }
  };

  const dataSaver = () => {
    props.saveData({
      Name: sName,
      Username: sUser,
      Password: sPass,
    });
  };


  return (
    <>
      <div>
        <Navbar bg="dark" variant="dark">
          <Nav.Link href="/">
            <h2 style={{ color: "white" }}>Every Store</h2>
          </Nav.Link>
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
                  <Navbar.Text>
                      Signed in as: {sessionStorage.getItem("Name")},
                    </Navbar.Text>
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
                      sessionStorage.setItem("Login", false);
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
                {isLogin == "Sign" ? "Signup" : isLogin == "Invalid" ? "Wrong Credentials" : "Login"}
              </Modal.Title>
            </Modal.Header>
            {isLogin == "Sign" ? (
              <Modal.Body>
                <Form>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="validationCustom01">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        onChange={(e) => setSName(e.target.value)}
                        onBlur={(e) => saveData("Name", e.target.value)}
                        type="text"
                        placeholder="Name"
                      />
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="validationCustom05">
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        onChange={(e) => setSUser(e.target.value)}
                        onBlur={(e) => saveData("Username", e.target.value)}
                        type="text"
                        placeholder="Username"
                      />
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="validationCustom05">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        onChange={(e) => setSPass(e.target.value)}
                        onBlur={(e) => saveData("Password", e.target.value)}
                        type="password"
                        placeholder="Password"
                      />
                    </Form.Group>
                  </Row>

                  <Row>
                    <Form.Group as={Col} controlId="validationCustom05">
                      <Form.Label
                        onClick={() => {
                          handleShow();
                          setLogin("Login");
                        }}
                      >
                        Already have an Account Click Here
                      </Form.Label>
                    </Form.Group>
                  </Row>

                  <Button
                    disabled={
                      sUser == "" || sPass == "" || sName == "" ? true : false
                    }
                    onClick={() => {
                      dataSaver();
                      setLogin("Login");
                      handleShow();

                    }}
                  >
                    Signup
                  </Button>
                </Form>
              </Modal.Body>
            ) : 
            isLogin == "Invalid" ? 
            (
              <Modal.Body>
                <Form>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="validationCustom05">
                      <Form.Label>You Entered Wrong Credentials</Form.Label>
                    </Form.Group>
                  </Row>

                  <Button
                    onClick={() => {
                      handleShow();
                      setLogin("Login");
                    }}
                  >
                    Try Again
                  </Button>
                </Form>
              </Modal.Body>
              )
            :
            (
              <Modal.Body>
                <Form>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="validationCustom01">
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        onChange={(e) => setLUser(e.target.value)}
                        type="text"
                        placeholder="Username"
                      />
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="validationCustom05">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        onChange={(e) => setLPass(e.target.value)}
                        type="password"
                        placeholder="Password"
                      />
                    </Form.Group>
                  </Row>

                  <Row>
                    <Form.Group as={Col} controlId="validationCustom05">
                      <Form.Label
                        onClick={() => {
                          handleShow();
                          setLogin("Sign");
                        }}
                      >
                        Don't have an Account Click Here
                      </Form.Label>
                    </Form.Group>
                  </Row>

                  <Button
                    disabled={lUser == "" || lPass == "" ? true : false}
                    onClick={() => {
                      handleClose();
                      auth();
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

const mapDispatchToProps = (dispatch) => {
  return {
    saveData: (data) => dispatch(saveData(data)),
  };
};

const mapStateToProps = (state, ownProps) => ({
  saveDataValue: state.UserReducer.saveDataValue,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
