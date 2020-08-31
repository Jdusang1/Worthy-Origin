import React from "react";
import {Container, Col, Row, Button} from "reactstrap"
import NavBar from "../components/Navbar"
import Jumbotron from "../components/Jumbotron";
import FactsCarousel from "../components/Carousel";
import Pyramid from "../components/PyramidChart"
import Footer from "../components/Footer";
import styled from "styled-components";

const grey = "#f9f9f9";
const white = "ffffff";

const Div = styled.div`
  div {
    text-align: center;
    background-color: ${props => props.color === "grey" ? grey : white};
    padding: 15px;

  }

  p {
    width: 60%;
    margin: 15px auto;
    font-size: 20px;
    font-family: "Roboto";
  }

  h2 {
   margin: 10px auto;
   font-family: "Raleway";
   font-size: 52px;

  }

  .button {
    background-color: #cb5744;
    border: none;
    

  }

  .button:hover {
  background-color: #ec9a59;
  `

const Facts = () => {

  return (
    <>
      <NavBar/>
      <Jumbotron/>
      

    <Container fluid={true}>
      <Div color={"grey"}>
        <div>
          <h2>DISCOVER GREENHOUSE GAS EMISSIONS FOR A SINGLE FOOD ITEM</h2>
          <h4>search bar goes here</h4>
          <Button>Search</Button>
        </div>
      </Div>

      <Div>
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

      </Div>

      <Div color={"grey"}>

        
          <FactsCarousel/>
        
      </Div>
  
      <Footer/>
    </Container>
    </>
  )


}

export default Facts;