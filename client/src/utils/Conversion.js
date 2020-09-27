import React from "react";

//converts greenhouse gas emissions to miles driven 
const Converter = ({ghg}) => {
  let milesDriven = ghg/.42
  return (
    milesDriven.toFixed(1))
    ;
};

export default Converter;
