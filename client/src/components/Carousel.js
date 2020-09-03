import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import region from "../img/annualbyregion.png";
import change from "../img/changeInCO2.png";
import trade from "../img/co2intrade.png";
import country from "../img/co2percountry.png";

const items = [
  {
    src: region,
    altText: "annual co2 by region",
    caption: "",
    header: "",
    key: "1"
  },
  {
    src: change,
    altText: "change in co2",
    caption: "",
    header: "",
    key: "2"
  },
  {
    src: trade,
    altText: "CO2 in trade",
    caption: "",
    header: "",
    key: "3"
  },
  {
    src: country,
    altText: "CO2 per country",
    caption: "",
    header: "",
    key: "4"
  }
];

const FactsCarousel = () => <UncontrolledCarousel items={items} autoPlay={false} />;

export default FactsCarousel;