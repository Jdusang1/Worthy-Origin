import React from "react";
import {Card, CardImg, CardBody, CardText } from "reactstrap";
import styled from "styled-components";

const CardWrapper = styled.article`
  .card {
    margin-top: 15px;
    border: 2px solid rgba(0,0,0,.125);
  }

  :hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  img {
    border-radius: 50%;
    height: 150px;
    width: 150px;
    margin: 10px auto;
    
  }
`

const HomeCard = (props) => {
  return (
    
    <CardWrapper>
      <Card>
          <CardImg top width="100%" src={props.img} alt="Card image cap" />
          <CardBody>
            
          <CardText>{props.text}</CardText>
          
          </CardBody>
        </Card>
    </CardWrapper>

  )
};

export default HomeCard;