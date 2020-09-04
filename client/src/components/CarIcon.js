import React from "react";
import styled from "styled-components";

const changeClass = (ghg) => {
  if (ghg <=100) {
    return "color: #458955;";
  } else if (ghg >=100 && ghg <=200) {
    return "color: #EDD569;";
  } else if (ghg >= 200 && ghg <= 300) {
    return "color: #E94128;";
  } else {
    return "color: #000;";
  }
}


const IconWrapper = styled.div`
  font-size: 100px;
  ${({ghg}) => changeClass(ghg)};
`

const CarIcon = ({ghg}) => {

  return (
    <>
    
    <IconWrapper ghg={ghg}>
      <div>
        <i className="fas fa-car-side" ></i>
      </div>
    </IconWrapper>
    </>

  )
}

export default CarIcon;