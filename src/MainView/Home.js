import React, {useEffect} from "react";
import Header from "./Header";
import "./MainStyle.css";
import data from "./Products";
import { connect } from "react-redux";

import { Row, Col, Container, Button, Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

import {getProductData} from "./Action";

const Home = (props) => {

  useEffect(() => {
    props.getProductData();
  }, []);


  return (
    <div>
      <Header />

      <Container fluid className="homeStyle">
        <Row>
          <Col lg="9">
            <div className="productStyle">
              {props.productData.map((v, index) => {
                return(
                <Card key={index} style={{ width: "18rem" }} className="cardStyle">
                  <Card.Img
                    variant="top"
                    height={300}
                    src={v.image}
                  />
                  <Card.Body>
                    <Link to={`product/${v.id}`}>
                    <Card.Title className="cardTitle">
                      {(v.title).slice(0, 35) + "..."}
                      </Card.Title>
                    </Link>
                    <Card.Text>{v.price + "$"}</Card.Text>
                    <Link to={`product/${v.id}`}>
                    <Button variant="primary">Add To Cart</Button>
                    </Link>
                  </Card.Body>
                </Card>
                )
              })}
            </div>
          </Col>

          <Col lg="3">
            <div className="listStyle">
              <ListGroup>
                <ListGroup.Item action href="#link1">
                  <h3>Categories</h3>
                </ListGroup.Item>
                <ListGroup.Item action href="#link2">
                  Fruits
                </ListGroup.Item>
                <ListGroup.Item action href="#link2">
                  Bags
                </ListGroup.Item>
                <ListGroup.Item action href="#link2">
                  Furniture
                </ListGroup.Item>
                <ListGroup.Item action href="#link2">
                  Electronics
                </ListGroup.Item>
                <ListGroup.Item action href="#link2">
                  Computers
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProductData: () => dispatch(getProductData())
  }
}

const mapStateToProps = (state, ownProps) => ({
  productData: state.UserReducer.productData,
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
