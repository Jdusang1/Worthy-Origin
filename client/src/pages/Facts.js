import React from "react";
import {Container, Col, Row, Button} from "reactstrap"
import NavBar from "../components/Navbar"
import Jumbotron from "../components/Jumbotron";
import FactsCarousel from "../components/Carousel";

const Facts = () => {

  return (
    <>
      <NavBar/>
      <Jumbotron/>
      

    <Container>
      <div>
        <h2>DISCOVER GREENHOUSE GAS EMISSIONS FOR A SINGLE FOOD ITEM</h2>
        <h4>search bar goes here</h4>
        <Button>Search</Button>
      </div>

      <div>
        <Row>
          <h2>Results</h2>
        </Row>
        <Row>
          <Col>
          <h2>image goes here</h2>
          </Col>
          <Col>
            <h2>Search Item</h2>
            <p>text about blah blah blah</p>
          </Col>
        </Row>
      </div>

      <div>
        <FactsCarousel/>
      </div>
  
      <div>
        <h2>FOOTER GOES HERE</h2>
      </div>
    </Container>
    </>
  )


}

export default Facts;