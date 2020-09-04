import React from "react";
import { Jumbotron } from "reactstrap";
import styled from "styled-components";
import logo from "../img/WorthyOrigin.png";
import TextLoop from "react-text-loop";
import market from "../pages/FarmersMarkets";
// import marketImg from "../img/market.png"
import facts from "../pages/Facts";
// import factsImg from "../img/veggies.png"
import user from "../pages/User";
// import userImg from "../img/farmersMarket.jpg"
// import homeImg from "../img/heroImage.png";
// import home from "../pages/Home";

const changeImg = (image) => {
  if (market){
    return "background-image: url(../img/market.png)"
  } else if (user){
    return "background-image: url(../img/farmersMarket.jpg)"
  } else if (facts){
    return "background-image: url(../img/veggies.png)"
  } else {
    return "background-image: url(../img/heroImage.png)"
  }
}


const JumboWrapper = styled.div`
  .jumbotron {
    position:relative;
    text-align:center;
    ${({image})} => changeImg(image);
    background-size: cover
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

const MainJumbotron = ({image}) => {
  return (
    <JumboWrapper>
      <div>
        <Jumbotron image={image}>
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
      </div>
    </JumboWrapper>
  );
}

export default MainJumbotron;
