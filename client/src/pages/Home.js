import React from "react";
import {Container, Col, Row, Button} from "reactstrap"
import HomeCard from "../components/HomeCard";
import Jumbotron from "../components/Jumbotron";
import ax from "../img/ax.jpg"
import cows from "../img/cows.jpg";
import fossilfuels from "../img/fossilfuels.jpg"
import styled from "styled-components"


const grey = "#f9f9f9";
const white = "ffffff";
const DivWhite = styled.div`
  div {
    text-align: center;
    background-color: #ffffff;
    padding: 15px;

  }
  h2 {
   margin: 0 auto;
  }
`
const Div = styled.div`
  div {
    text-align: center;
    background-color: ${props => props.color === "grey" ? grey : white};
    padding: 15px;

  }
  h2 {
   margin: 0 auto;
  }
`


const Home = () => {

  return (
    <>
      <Jumbotron/>

    <Container className= "container-fluid">

      <Div color={"grey"}>
      <div>
        <h2>DID YOU KNOW?</h2>
        <p>GRAPH</p>
        <Button href={"/facts"}>Learn More!</Button>
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

    <Div>
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