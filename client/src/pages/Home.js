import React from "react";
import { Container,Col,Row,Button,Card,CardImg,CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import MainJumbotron from "../components/Jumbotron";
import NavBar from "../components/Navbar";
import deforest from "../img/deforest.jpg";
import cows from "../img/cows.jpg";
import fossilfuel from "../img/fossilfuel.jpg";
// import homeImg from "../img/heroImage.png"
import styled from "styled-components";
import Footer from "../components/Footer";
import StackedBar from "../components/StackedBar";
import market from "../img/farmersMarket.jpg";
import CircleImage from "../components/CircleImage";
import groceries from "../img/groceries.jpg";
import LoginButton from "../components/LoginBtn";
import ProfileButton from "../components/ProfileBtn";
import { useAuth0 } from "@auth0/auth0-react";
import ReactTooltip from "react-tooltip";

//Styling
const grey = "#f9f9f9";
const white = "ffffff";

const Div = styled.div`
  div {
    text-align: center;
    background-color: ${(props) => (props.color === "grey" ? grey : white)};
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
  li {
    font-size: 14px;
  }
  .button {
    background-color: #cb5744;
    border: none;
    padding: 10px 15px;
    font-size: 20px;
  }
  .button:hover {
    background-color: #ec9a59;
  }
  a {
    background-color: none;
    color: white;
  }

  a:hover {
    text-decoration: none;
  }
  .extraClass {
    font-size: 14px;
    background-color: #143d3d;
    max-width: 200px;
    text-align: left;
    opacity: 0.98;
  }
`;
const CardWrapper = styled.article`
  .card {
    min-width: 250px;
    margin-top: 15px;
    border: 2px solid #3f5961;
  }
  :hover {
    box-shadow: 0 4px 8px 0 #3f5961, 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .card-body {
    padding: 20px;
  }

  ul {
    padding-inline-start: 0px;
    list-style-type: none;
  }
  img {
    border-radius: 50%;
    height: 200px;
    width: 200px;
    margin: 10px auto;
  }
`;

const JumboWrapper =styled.div`
.homeImg{
background-image:url("../img/heroImage.png");
}
`

const Home = () => {

  const { isAuthenticated } = useAuth0();
  
  return (
    <>
      <NavBar />
      <JumboWrapper>
      <MainJumbotron className="homeImg"/>
      </JumboWrapper>
      <Container fluid={true}>
        <Div color={"grey"}>
          {/* Did You Know section, with chart on ghg emission data */}
          <div>
            <h2>DID YOU KNOW?</h2>
            <p>
              Food production is a large contributor to climate change. Food
              products emit different values of greenhouse gas emissions during
              each part of the supply change cycle. Below is a chart
              illustrating the amount of              
                <a data-for="custom-color-no-arrow"
                data-tip="Greenhouse gases reflect heat radiation that the Earth emits. Humans are adding greenhouse gases to the atmosphere. This is making the planet's average temperature rise by increasing the greenhouse effect.">
                <b> greenhouse gas emissions </b>
              </a>
              for the lifecycle of each product.
            </p>
            <StackedBar />
            <br/>
            <br/>
            
            <div>

              <Button className="button"> <Link to ="/facts">Learn More!</Link></Button>
            </div>
            <ReactTooltip id="custom-color-no-arrow" className="extraClass" textColor="#e7d8d6" effect="solid"/>
          </div>
        </Div>

        <Div>
          {/* Top 3 contributors to global warming */}
          <div>
            <Row>
              <h2>TOP CONTRIBUTORS TO GLOBAL WARMING</h2>
            </Row>
            <Row>
              <Col>
                <CardWrapper>
                  <Card>
                    <CardImg topwidth="100%" src={deforest} alt="Stack of logs" />
                    <CardBody>
                      <a data-for="custom-color-no-arrow"
                        data-tip="Deforestation is the removal of a forest from land which is then converted to a non-forest use. It can involve conversion of forest land to farms, ranches, or urban use. The most concentrated deforestation occurs in tropical rain forests.">
                        <h3>Deforestation</h3></a>
                        <hr/>
                        <ul>
                          <li>13 million hectares of forest have been converted for other uses or destroyed by natural causes.</li>
                          <i className="fas fa-tree"></i>
                          <li>Up to 28,000 species can go extinct in the next quarter century due to deforestation.</li>
                          <i className="fas fa-tree"></i>
                          <li>Tropical rain forests store more than 210 gigatons of carbon and deforestation is the cause of 15% of carbon emissions.</li>
                        </ul>
                        <ReactTooltip id="custom-color-no-arrow" className="extraClass" textColor="#e7d8d6" effect="solid"/>
                    </CardBody>
                  </Card>
                </CardWrapper>
              </Col>
              <Col>
                <CardWrapper>
                  <Card>
                    <CardImg top width="100%" src={cows} alt="Black and brown cows" />
                    <CardBody>
                      <a data-for="custom-color-no-arrow"
                        data-tip="Animal agriculture is the practice of breeding animals for the production of animal products. In everyday life, animal agriculture links to our demand for meat. We know that reducing our meat consumption is one way that we can help to make our carbon footprint smaller.">
                        <h3>Agriculture</h3></a>
                        <hr/>
                        <ul>
                          <li>Animal agriculture water consumption ranges from 34-76 trillion gallons annually. </li>
                          <i className="fas fa-poop"></i>
                          <li>Animal agriculture is responsible for 18% of the total release of greenhouse gases world-wide.</li>
                          <i className="fas fa-poop"></i>
                          <li>The amount of waste produced by livestock and poultry in factory farms is almost 13 times more than that produced by the entire US population.</li>
                        </ul>
                        <ReactTooltip id="custom-color-no-arrow" className="extraClass" textColor="#e7d8d6" effect="solid"/>
                    </CardBody>
                  </Card>
                </CardWrapper>
              </Col>
              <Col>
                <CardWrapper>
                  <Card>
                    <CardImg topwidth="100%" src={fossilfuel} alt="Fossil fuel plant"/>
                    <CardBody>
                        <a data-for="custom-color-no-arrow"
                        data-tip="All living matter is made up largely of the element carbon. and the fossils that formed retained the carbon that was present in these organisms when they died. Carbon burns, and as a result it is a source of energy.">
                        <h3>Fossil Fuels</h3></a>
                        <hr/>
                        <ul>
                          <li>Fossil fuels emit carbon dioxide and other harmful pollutants when burned which leads to a wide variety environmental issues.</li>
                          <i className="fas fa-gas-pump"></i>
                          <li>The use of fossil fuels in transportation contributes almost 30% of all US global warming emissions.</li>
                          <i className="fas fa-gas-pump"></i>
                          <li>Oil releases a huge amount of carbon when burned – approximately a third of the world’s total carbon emissions.</li>
                        </ul>
                        <ReactTooltip id="custom-color-no-arrow" className="extraClass" textColor="#e7d8d6" effect="solid"/>
                    </CardBody>
                  </Card>
                </CardWrapper>
              </Col>
            </Row>
          </div>
        </Div>
        <Div color={"grey"}>
          <div>
            {/* Log in section, user can log in to find their own carbon footprint for food consumption */}
            <Row>
              <Col>
                <CircleImage image={groceries} alt="Groceries in mesh bag"/>
              </Col>
              <Col>
                <h2>FIND YOUR CARBON FOOTPRINT</h2>
                <p>
                  Curious about your carbon footprint for your grocery items?
                  Log in to build your list and calculate your total carbon
                  footprint.{" "}
                </p>
                {isAuthenticated ? <ProfileButton /> : <LoginButton />}
              </Col>
            </Row>
          </div>
        </Div>

        <Div>
          <div>
            {/* Find farmers markets within a certain area, enter zip code to search*/}
            <Row>
              <Col>
                <h2>FIND FARMERS MARKETS</h2>
                <p>Switching to purchasing more local foods can reduce greenhouse
                  gas emissions. Search for local farmers markets in your area!</p>
                <Button className="button"><Link to ="/farmers-markets">Search</Link>
                </Button>
              </Col>
              <Col>
                <CircleImage image={market} alt="Farmers market"/>
              </Col>
            </Row>
          </div>
        </Div>
        <div>
        <Footer />
        </div>
      </Container>
    </>
  );
};

export default Home;
