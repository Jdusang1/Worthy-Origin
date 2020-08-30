import React,  { useState, useEffect } from "react";
import {Container, Col, Row } from "reactstrap"
import Jumbotron from "../components/Jumbotron";
import SearchBar from "../components/SearchBar";
import MarketCard from "../components/MarketCard";
import API from "../utils/API";
import LocalAPI from "../utils/localAPI";

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
      .then(( {data} ) => setMarketInfo({
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
        <h2>SEARCH FOR LOCAL FARMERS MARKET</h2>
            <p>paragraph</p>
            <SearchBar 
            searchTerm={searchTerm}
            handleInputChange={handleInputChange}
            handleFormSubmit={handleFormSubmit}
            />
      </div>

      <div>
        <Row>
          <h2>Farmer's Markets in Your Area: </h2>
        </Row>
        <Row>
            {markets.map(market => (
              <MarketCard
                key={market.id}
                marketName={market.marketname}
                id={market.id}
                setSelectedMarket={() => setMarketInfo({ ...marketInfo, selectedMarket: market})}
                />
            ))}

        </Row>
        <Row>
          <Col>
            <h3>Click on a market to get more details!</h3>
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

export default FarmersMarkets;