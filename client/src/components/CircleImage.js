import React from "react";
import styled from "styled-components";

const Image = styled.div`
  img{
    border-radius: 50%;
    height: 250px;
    width: 250px;
    margin: 10px auto;
  }
`

const CircleImage = (props) => {
  return (
    <Image>
      <img src={props.image} />
    </Image>
  )
}

export default CircleImage;