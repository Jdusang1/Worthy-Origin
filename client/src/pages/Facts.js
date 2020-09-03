import React, {useState} from "react";
import { Container, Col, Row, Button } from "reactstrap"
import NavBar from "../components/Navbar"
import Jumbotron from "../components/Jumbotron";
import FactsCarousel from "../components/Carousel";
import SearchBar from "../components/SearchBar";
import Converter from "../utils/Conversion";
import Footer from "../components/Footer";
import styled from "styled-components";
import Charts from "../components/Charts";
import API from "../utils/API"

const grey = "#f9f9f9";
const white = "ffffff";

const Div = styled.div`
  div {
    text-align: center;
    background-color: ${props => props.color === "grey" ? grey : white};
    padding: 15px;
    

  }

  .searchBar {
   text-align: center;
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
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [itemInfo, setItemInfo] = useState({
    id: "",
    ghg: "",
    country: "",
    product: ""
  })

  const {id, ghg, country, product} = itemInfo;

  const handleInputChange = event => {
    setSearchTerm(event.target.value );
  }

  const handleFormSubmit = event => {
    event.preventDefault();
      API.getFood(searchTerm)
        .then((data) => {
          console.log(data)

          setItemInfo({
            id: data.data[0]._id,
            ghg: data.data[0].ghgEmission,
            country: data.data[0].country,
            product: data.data[0].product
          })
          setSearchTerm("");
        }
        
        )
        .catch(err => console.log(err))
  };

  return (
    <>
      <NavBar />
      <Jumbotron />

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
          <div>
            <Row>
              <Col>
                <h2>image goes here</h2>
              </Col>
              <Col>
                <h2>{product}</h2>
                <p><strong>{product}</strong> produces <strong>{ghg}</strong> kg CO2.</p>
                <p>That is equivalent to <Converter ghg={ghg}/> miles driven!</p>
              </Col>
            </Row>
          </div>

        </Div>

        <Div color={"grey"}>

          <Charts/>
          

        </Div>

        <Div>
        <FactsCarousel />
          
        </Div>

        <Footer />
      </Container>
    </>
  )


}

export default Facts;