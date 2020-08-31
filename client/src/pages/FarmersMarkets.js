import React, { useState, useEffect } from "react";
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

const FarmersMarkets = () => {

  const [marketInfo, setMarketInfo] = useState({
    searchTerm: "",
    id: "",
    marketName: "",
    markets: [],
    selectedMarket: null,
  })

  const { searchTerm, id, marketName, markets, selectedMarket } = marketInfo;

  const marketSearch = searchTerm => {
    API.getMarkets(searchTerm)
      .then(({ data }) => setMarketInfo({
        id: data.id,
        marketName: data.marketname,
        markets: data.results,
        selectedMarket: null,
        searchTerm: "",
      }))
  }

  useEffect(() => {
    marketSearch()
  }, []);

  const handleInputChange = event => {
    setMarketInfo({ ...marketInfo, searchTerm: event.target.value });
  }

  const handleFormSubmit = event => {
    event.preventDefault();
    marketSearch(searchTerm)
  };

  //TODO: make a second api call to localAPI to get details about selected market

  return (
    <>
      <NavBar />
      <Jumbotron />

      <Container fluid={true} >
        <Div color="grey">
          <div>
            <h2>SEARCH FOR LOCAL FARMERS MARKET</h2>
            <p>paragraph</p>
            <SearchBar
              searchTerm={searchTerm}
              handleInputChange={handleInputChange}
              handleFormSubmit={handleFormSubmit}
            />
          </div>
        </Div>

        <Div>

          <div>
            <Row>
              <h2>Farmer's Markets in Your Area: </h2>
            </Row>
            <Row>
              {markets.map(market => (
                <Col>
                  <MarketCard
                    key={market.id}
                    marketName={market.marketname}
                    id={market.id}
                    setSelectedMarket={() => setMarketInfo({ ...marketInfo, selectedMarket: market })}
                  />
                </Col>
              ))}

            </Row>
            <Row>
              <Col>
                <h3>Click on a market to get more details!</h3>
              </Col>
            </Row>
          </div>
        </Div>


        <Footer />


      </Container>
    </>
  )


}

export default FarmersMarkets;