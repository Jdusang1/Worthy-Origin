import React from "react";
import {Container, Col, Row, Button} from "reactstrap"
import Jumbotron from "../components/Jumbotron";
import SearchBar from "../components/SearchBar";

const Home = () => {

  return (
    <>
      <Jumbotron>
      <Row>
        <Col>
          LOGO
        </Col>
        <Col>
          LOGIN LINK
        </Col>
        <Col>
          FACTS
        </Col>
        <Col>
          FARMERS MARKET
        </Col>
      </Row>
      <Row>
        <Col>
          <p>logo</p>
          <p>blurb about our site</p>
        </Col>
      </Row>
      </Jumbotron>

    <Container>
      <div>
        <h2>DID YOU KNOW?</h2>
        <p>GRAPH</p>
        <Button href={"/facts"}>Learn More!</Button>
      </div>

      <div>
        <Row>
          <h2>TOP CONTRIBUTERS TO GLOBAL WARMING</h2>
        </Row>
        <Row>
          <Col>
            Card goes here
          </Col>
          <Col>
            Card goes here
          </Col>
          <Col>
            Card goes here
          </Col>
        </Row>
      </div>

      <div>
        <Row>
          <Col>
          <p>image</p>
          </Col>
          <Col>
            <h2>Find your carbon footprint</h2>
            <p>paragraph</p>
            <Button >Login</Button>
          </Col>
        </Row>
      </div>

      <div>
      <Row>
          <Col>
          <h2>Find farmers markets</h2>
            <p>paragraph</p>
            <p>link to Farmer's Market component here?</p>
          </Col>
          <Col>
            <p>image</p>
          </Col>
        </Row>
      </div>

      <div>
        <h2>FOOTER GOES HERE</h2>
      </div>
    </Container>
    </>
  )


}

export default Home;