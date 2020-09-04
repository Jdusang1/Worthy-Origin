import React, { useState } from "react";
import { Container, Col, Row } from "reactstrap"
import NavBar from "../components/Navbar";
import MainJumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import MarketCard from "../components/MarketCard";
import API from "../utils/API";
import styled from "styled-components";
import MarketDetails from "../components/MarketDetails";
import NoDetails from "../components/NoDetailModal";

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
  }
`

const FarmersMarkets = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [marketInfo, setMarketInfo] = useState({
    searchTerm: "",
    id: "",
    marketName: "",
    markets: [],
    selectedMarket: null,
  })

  const [marketDetails, setMarketDetails] = useState ({
    address: "",
    link: "",
    products: "",
    schedule: "",
  })

  const { searchTerm, markets } = marketInfo;
  const { address, link, products, schedule } = marketDetails;

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

  const getMarketDetails = id => {
    if (id !== "Error") {
      API.getSelectedMarket(id)
        .then(({data}) => {setMarketDetails({
          address: data.marketdetails.Address,
          link: data.marketdetails.GoogleLink,
          products: data.marketdetails.Products,
          schedule: data.marketdetails.Schedule,
        })
        toggle()
      })
    } 

  }


  const handleInputChange = event => {
    setMarketInfo({ ...marketInfo, searchTerm: event.target.value });
  }

  const handleFormSubmit = event => {
    event.preventDefault();
    marketSearch(searchTerm)
  };


  return (
    <>
      <NavBar />
      <MainJumbotron image={"marketImg"}/>

      <Container fluid={true} >
        <Div color="grey">
          <div>
            <h2>SEARCH FOR LOCAL FARMERS MARKETS</h2>
            <h3>Why shop at farmers markets?</h3>
            <p>They feature produce that is in season so you'll get to buy (or sample!) fruits and vegetables at their freshest. Plus typically everything is locally grown so you can worry less about the GHG emissions of the transport from the farm to you.</p>
            <a href="https://www.usda.gov/media/blog/2012/07/02/top-reasons-shop-farmers-market#:~:text=Access%20to%20fresh%2C%20locally%20grown,peak%20of%20the%20growing%20season.&text=Shopping%20at%20farmers%20markets%20also,food%20closer%20to%20your%20neighborhood." target="blank">Click Here to Learn More</a>
            <SearchBar
              searchTerm={searchTerm}
              handleInputChange={handleInputChange}
              handleFormSubmit={handleFormSubmit}
              placeholder={"Zip Code"}
              name={"location"}
              button={"Search"}
            />
          </div>
        </Div>

        <Div>
          <div>
            <Row>
              <h2>Farmers Markets in Your Area: </h2>
            </Row>
            <Row>
              <Col>
                <h3>Click on a market to find out more!</h3>
              </Col>
            </Row>
            <Row>
              {markets.map(market => (
                <Col md={3} key={market.id}>
                  <MarketCard
                    marketName={market.marketname}
                    id={market.id}
                    setSelectedMarket={() => setMarketInfo({ ...marketInfo, selectedMarket: market })}
                    getMarketDetails={getMarketDetails}
                  />
                </Col>
              ))}
            </Row>
            <Row>
              <Col>
                { products ? (<MarketDetails 
                  address={address}
                  schedule={schedule}
                  products={products}
                  link={link}
                  modal={modal}
                  toggle={toggle}
                />) : <NoDetails
                  modal={modal}
                  toggle={toggle}
                />
               }
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