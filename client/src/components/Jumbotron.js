import React from "react";
import { Jumbotron } from "reactstrap";
import styled from "styled-components";
import img from "../img/heroImage.png";
import logo from "../img/WorthyOrigin.png";
import TextLoop from "react-text-loop";

const JumboWrapper = styled.div`
  .jumbotron {
    position:relative;
    text-align:center;
    background-image: url(${img});
    background-size: cover
  }
  .img {
    margin-left:auto;
    margin-right:auto;
  }
  .text-loop {
    color: white;
    font-size: 24px;
    font-family: "Raleway", sans-serif;
  }
`

function MainJumbotron(props) {
  

  return (
    <JumboWrapper>
      <div>
        <Jumbotron className="backgroundImg">
          <img src={logo} alt="Worthy Origin Logo" />
          <div className="text-loop">
          <TextLoop interval={7000} adjustingSpeed={1000}>
            <span>“The greatest threat to our planet is the belief that someone else will save it.” </span>
            <span>“We are living on this planet as if we had another one to go to.”</span>
            <span>"The first rule of sustainability is to align with natural forces, or at least not try to defy them."</span>
            <span>"Environment is no one’s property to destroy; it’s everyone’s responsibility to protect."</span>
          </TextLoop>{" "}
          </div>

        </Jumbotron>
      </div>
    </JumboWrapper>
  );
}

export default MainJumbotron;
