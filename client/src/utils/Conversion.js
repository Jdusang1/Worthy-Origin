import React from "react";


const Converter = ({ghg}) => {
  let milesDriven = ghg/.42
  return (
    milesDriven.toFixed(1))
    ;
};

export default Converter;
