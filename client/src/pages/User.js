import React, {useState, useEffect} from "react";
import { Container, Col, Row, Button } from "reactstrap"
import NavBar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import MarketCard from "../components/MarketCard";
import API from "../utils/API";
import LocalAPI from "../utils/localAPI";
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

const User = () => {

  

  const handleInputChange = event => {
  
  }

  const handleFormSubmit = event => {
    event.preventDefault();
  
    
  };

  

  return (
    <>
      <NavBar />
      <Jumbotron/>

      <Container fluid={true} >
        <Div color="grey">
          <div>
            <h2>BUILD YOUR GROCRY LIST</h2>
            <p>paragraph</p>
            <SearchBar
              // searchTerm={searchTerm}
              // handleInputChange={handleInputChange}
              // handleFormSubmit={handleFormSubmit}
            />
          </div>
        </Div>

        <Div>

          <div>
            <Row>
              <h2>GROCERIES </h2>
            </Row>
            <Row>
              <h2>Table goes here</h2>
              
            </Row>
          </div>


            <Row>
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
            </Row>
        </Div>

        
        <Footer/>
       

      </Container> 
    </>
  )


}

export default User;