import React from "react";
import { Jumbotron } from "reactstrap";
import styled from "styled-components";
import img from "../img/heroImage.png";
import logo from "../img/WorthyOrigin.png"

const JumboWrapper = styled.div`
  .jumbotron {
    text-align:center;
    background-image: url(${img});
    background-size: cover
  }
  .img {
    margin-left:auto;
    margin-right:auto;
  }
  p {
    color: white;
    font-size: 24px;
  }
`

function MainJumbotron() {
  return (
    <JumboWrapper>
      <div>
        <Jumbotron>
          <img src={logo} alt="Worthy Origin Logo" />
          <hr className="my-2" />
          <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

        </Jumbotron>
      </div>
    </JumboWrapper>
  );
}

export default MainJumbotron;
