import React from "react";
import {Container, Col, Row, Button} from "reactstrap"
import HomeCard from "../components/HomeCard";
import Jumbotron from "../components/Jumbotron";
import ax from "../img/ax.jpg"
import cows from "../img/cows.jpg";
import fossilfuels from "../img/fossilfuels.jpg"
import styled from "styled-components"
import Chart from "../components/WIDchart";


const grey = "#f9f9f9";
const white = "ffffff";

const Div = styled.div`
  div {
    text-align: center;
    background-color: ${props => props.color === "grey" ? grey : white};
    padding: 15px;

  }
  h2 {
   margin: 10px auto;
  }

  Button {
    background-color: #cb5744;
    border: none;

  }

  Button:hover {
  background-color: #ec9a59;
`



const Home = () => {

  return (
    <>
      <Jumbotron/>

      <Container fluid={true}>

        <Div color={"grey"}>
        <div>
          <h2>DID YOU KNOW?</h2>
          <p>Food production is a large contributor to climate change. Food products emit different values of greenhouse gas emissions during each part of the supply change cycle. Below is a chart illustrating the amount of greenhouse gas emissions from farming alone.</p>
          
          <Chart/>
          <Button className="btn"href={"/facts"}>Learn More!</Button>

        </div>
        </Div>

        <Div>
          <div>
          <Row >
            <h2 >TOP CONTRIBUTORS TO GLOBAL WARMING</h2>
          </Row>
          <Row>
            <Col>
              <HomeCard
                img={ax}
                text={"Refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am x but destroy couch as revenge i shredded your linens for you but poop in litter box, scratch the walls. Loved it, hated it, loved it, hated it love you, then bite you but reward the chosen human with a slow blink yet you have cat to be kitten me right meow or hunt anything that moves."}
              />
            </Col>
            <Col>
            <HomeCard
              img={fossilfuels}
              text={"Refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am x but destroy couch as revenge i shredded your linens for you but poop in litter box, scratch the walls. Loved it, hated it, loved it, hated it love you, then bite you but reward the chosen human with a slow blink yet you have cat to be kitten me right meow or hunt anything that moves."}

            />
            </Col>
            <Col>
            <HomeCard
            img={cows}
            text={"Refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am x but destroy couch as revenge i shredded your linens for you but poop in litter box, scratch the walls. Loved it, hated it, loved it, hated it love you, then bite you but reward the chosen human with a slow blink yet you have cat to be kitten me right meow or hunt anything that moves."}

            />
            </Col>
          </Row>
          </div>
        </Div>

      <Div color={"grey"}>
        <div>
          <Row>
            <Col>
            <p>image</p>
            </Col>
            <Col>
              <h2>Find your carbon footprint</h2>
              <p>paragraph</p>
              <Button >Login</Button>
            </Col>
          </Row>
        </div>
      </Div>  

      <Div>
        <div>
        <Row>
            <Col>
            <h2>Find farmers markets</h2>
              <p>paragraph</p>
              <Button href={"/farmers-markets"}>Search</Button>
            </Col>
            <Col>
              <p>image</p>
            </Col>
          </Row>
        </div>
      </Div>

        <div>
          <h2>FOOTER GOES HERE</h2>
        </div>
    </Container>
    </>
  )


}

export default Home;