import React from "react";
import {Jumbotron} from "reactstrap";
import styled from "styled-components";
import heroImg from "../../img/heroImage.png"

const JumboWrapper = styled.article`
  text-align:center;
  background-image: url(${heroImg})
`

function MainJumbotron(props) {
  return (
    <JumboWrapper>
      <div>
        <Jumbotron>
          <h1 className="display-3">Hello, world!</h1>
          <hr className="my-2" />
          <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          
        </Jumbotron>
    </div>
  </JumboWrapper>
  );
}

export default MainJumbotron;
