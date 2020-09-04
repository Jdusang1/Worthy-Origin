import React, { useState } from "react";
import { Container, Col, Row } from "reactstrap"
import NavBar from "../components/Navbar"
import MainJumbotron from "../components/Jumbotron";
import FactsCarousel from "../components/Carousel";
import SearchBar from "../components/SearchBar";
import Converter from "../utils/Conversion";
import Footer from "../components/Footer";
import styled from "styled-components";
import Charts from "../components/Charts";
import API from "../utils/API";
import Placeholder from "../img/placeholder.png";


const grey = "#f9f9f9";
const white = "ffffff";

const Div = styled.div`
  
  div {
    text-align: center;
    background-color: ${props => props.color === "grey" ? grey : white};
    padding: 15px;
    margin: 0 auto;
  
  }

  .searchBar {
    margin: 0 auto;
   
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
   text-align: center;

  }

  .button {
    background-color: #cb5744;
    border: none;
  }

  .button:hover {
  background-color: #ec9a59;
  }

  .placeholder {
    height: 200px;
    width: 200px;
  }
  `

const Facts = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [itemInfo, setItemInfo] = useState({
    id: "",
    ghg: "",
    country: "",
    product: ""
  })

  const { ghg, product } = itemInfo;

  const handleInputChange = event => {
    setSearchTerm(event.target.value);
  }

  const handleFormSubmit = event => {
    event.preventDefault();
    let word = searchTerm;
    word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    API.getFood(word)
      .then((data) => {
        console.log(data)
        setItemInfo({
          id: data.data[1]._id,
          ghg: data.data[1].ghgEmission,
          country: data.data[1].country,
          product: data.data[1].reference
        })
        setSearchTerm("");
      })
      .catch(err => console.log(err))
  };

  return (
    <>
      <NavBar />
      <MainJumbotron image={"factsImg"}/>

      <Container fluid={true}>
        <Div color={"grey"}>
          <div>
            <h2>DISCOVER GREENHOUSE GAS EMISSIONS FOR A SINGLE FOOD ITEM</h2>
            <SearchBar
              className="searchBar"
              searchTerm={searchTerm}
              handleInputChange={handleInputChange}
              handleFormSubmit={handleFormSubmit}
              placeholder={"Food Item"}
              name={"item"}
              button={"Search"}
            />
          </div>
        </Div>

        <Div>

          {product ? (
            <div>
              <Row>
                <Col>
                  <img src={Placeholder} alt="Fruit in circle" className="placeholder" />
                </Col>
                <Col>
                  <h2>{product}</h2>
                  <p><strong>{product}</strong> produces <strong>{ghg}</strong> kg CO2.</p>
                  <p>That is equivalent to <Converter ghg={ghg} /> miles driven in a passenger car! </p>
                </Col>
              </Row>
            </div>

          ) : <div></div>}

        </Div>

        <Div color={"grey"}>
          <div>
            <h4>Select a food item to see the product's life cycle greenhouse gas emissions in kg CO2</h4>
            <h4>Hover over the chart to read the values</h4>
            <p>1 mile driven in a passenger car is equivalent to .44 kg C02</p>
            <Charts />
          </div>
        </Div>

        <Div>
          <h2>Other Facts About Greenhouse Gas </h2>
          <FactsCarousel />
        </Div>

        <Footer />
      </Container>
    </>
  )


}

export default Facts;