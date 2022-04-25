import React, {useEffect} from "react";
import "./MainStyle.css";
import { connect } from "react-redux";
import data from "./Products";


import { Row, Col, Container, Button, Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

import {getProductData} from "./Action";

const Home = (props) => {

  useEffect(() => {
    props.getProductData();
  }, []);


  return (
    <div>

      <Container fluid className="homeStyle">
        <Row>
          <Col lg="9">
            <div className="productStyle">
              {data.map((v, index) => {
                return(
                  <div>
                <Card key={index} style={{ width: "18rem" }} className="cardStyle">
                  <Card.Img
                    variant="top"
                    height={300}
                    src={v.image}
                  />
                  <Card.Body>
                    <Card.Title className="cardTitle">
                      {(v.title).slice(0, 35) + "..."}
                      </Card.Title>
                    <Card.Text>{v.price + "$"}</Card.Text>

                    <Link to={`product/${v.id}`}>
                    <Button variant="primary">Add To Cart</Button>
                    </Link>
                  </Card.Body>
                </Card>
                </div>
                )
              })}
            </div>
          </Col>

          <Col lg="3">
            <div className="listStyle">
              <ListGroup>
                <ListGroup.Item action href="/">
                  <h3>Categories</h3>
                </ListGroup.Item>
                <ListGroup.Item action href="/">
                  Fruits
                </ListGroup.Item>
                <ListGroup.Item action href="/">
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
