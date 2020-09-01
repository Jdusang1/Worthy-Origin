import React, {useState, useEffect} from "react";
import { Container, Col, Row, Button } from "reactstrap"
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import NavBar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
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

  const { user, isAuthenticated } = useAuth0();
  const [groceryItem, setGroceryItem] = useState({
    searchTerm: "",
    id: "",
    ghg: "",
    country: ""
  })

  const {searchTerm, id, ghg, country} = groceryItem;
  

  const handleInputChange = event => {
  
  }

  const handleFormSubmit = event => {
    event.preventDefault();
  
    
  };

  

  return (
      isAuthenticated && (
    <>
      <NavBar />
      <Jumbotron/>
      
      <Container fluid={true} >
        <Div color="grey">
          <div>
            <img 
            src={user.picture} 
            alt={user.name} 
            className="rounded-circle"/>  
            <h1>Welcome back, {user.name}!</h1>
            <h2>BUILD YOUR GROCERY LIST</h2>
            <p>paragraph</p>
            <SearchBar
              searchTerm={searchTerm}
              handleInputChange={handleInputChange}
              handleFormSubmit={handleFormSubmit}
              placeholder={"Food Item"}
              name={"item"}
              button={"Add"}
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
  );


}

export default withAuthenticationRequired(User);