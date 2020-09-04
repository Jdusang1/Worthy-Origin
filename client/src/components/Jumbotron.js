import React from "react";
import { Jumbotron } from "reactstrap";
import styled from "styled-components";
import logo from "../img/WorthyOrigin.png";
import TextLoop from "react-text-loop";
import market from "../img/market.png";
import hero from "../img/heroImage.png";

const changeImg = (src) => {
  if (src === "marketImg"){
    return `background-image: url(${market});`;
  } else if (src === "userImg"){
    return `background-image: url("../img/farmersMarket.jpg");`;
  } else if (src === "factsImg"){
    return `background-image: url("../img/veggies.png");`;
  } else {
    return `background-image: url(${hero});`;
  }
}
// ${({src}) => changeImg(src)};

const JumboWrapper = styled.div`
.jumbotron {
  position:relative;
  text-align:center;
  background-size: cover
  background-image: url(${hero})
  }

  .img {
    margin-left:auto;
    margin-right:auto;
  }
  p {
    color: white;
    font-size: 24px;
    font-family: "Raleway", sans-serif;
  }
`

const MainJumbotron = ({src}) => {
  return (
    <JumboWrapper src={src}>
        <Jumbotron >
          <img src={logo} alt="Worthy Origin Logo" />
          <p>
          <TextLoop interval={7000} adjustingSpeed={1000}>
            <span>“The greatest threat to our planet is the belief that someone else will save it.” </span>
            <span>“We are living on this planet as if we had another one to go to.”</span>
            <span>"The first rule of sustainability is to align with natural forces, or at least not try to defy them."</span>
            <span>"Environment is no one’s property to destroy; it’s everyone’s responsibility to protect."</span>
          </TextLoop>{" "}
          </p>
        </Jumbotron>
    
    </JumboWrapper>
  );
}

export default MainJumbotron;