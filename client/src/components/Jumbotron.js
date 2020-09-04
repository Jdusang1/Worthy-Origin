import React from "react";
import { Jumbotron } from "reactstrap";
import styled from "styled-components";
import logo from "../img/WorthyOrigin.png";
import TextLoop from "react-text-loop";
// import marketImg from "../img/market.png"
// import factsImg from "../img/veggies.png"
// import userImg from "../img/farmersMarket.jpg"
import homeImg from "../img/heroImage.png";

// const changeImg = ({image}) => {
//   console.log("Image", image)
//   if (image === "marketImg"){
//     return "background-image: url('../img/market.png');"
//   } else if (image === "userImg"){
//     return "background-image: url('../img/farmersMarket.jpg');"
//   } else if (image === "factsImg"){
//     return "background-image: url('../img/veggies.png');"
//   } else {
//     return "background-image: url('../img/heroImage.png');"
//   }
// }
const JumboWrapper = styled.div`
  ${'' /* ${({image}) => changeImg(image)}; */}
  .jumbotron {
    background-image:url(${homeImg});
    position:relative;
    text-align:center;
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
// {image}
const MainJumbotron = () => {
  return (
    // image={image}
  <JumboWrapper >
      <div>
        <Jumbotron >
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